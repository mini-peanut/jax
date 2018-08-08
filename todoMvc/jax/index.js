import _ from 'lodash'
import applyMixin from './mixin.js'

let Vue
export default function Jax(store) {
  return {
    wrapper($options) {
      const _$options = _.cloneDeep($options);

      $options.methods = _.keys($options.methods).reduce(function (ret, fnKey) {
        if (fnKey) {
          ret[fnKey] = function (...args) {
            return _$options.methods[fnKey].apply(null, [{commit: store.commit, state: store.state}].concat(args))
          }
        }
        return ret
      }, {});

      $options.data = function (vm) {
        const {$store, $props = {}} = vm;
        return  _$options.data ? _$options.data.call(null, $store.state, $props) : {}
      };

      if ($options.computed) {
        console.warn('jax -> wrapper: computed is a deprecated option, and it will be replaced with {}, please use data instead')
        $options.computed = {}
      }

      return $options
    },
    mapMutations(namespace, mutationKeys) {
      assert(namespace,'jax->mapMutaions: namespace should be defined');
      assert(_.isString(namespace),'jax->mapMutaions: namespace should be string');

      if (mutationKeys) {
        assert(_.isArray(mutationKeys), 'jax->mapMutaions: if you specified mutationKeys, it should be Array')
      }

      // 如果不指定mutations 则默认为全部
      if (!mutationKeys) {
        mutationKeys = _.keys(store._mutations)
      }

      const ret = {};
      mutationKeys.forEach(function(methodName) {
        ret[methodName] = function mappedMutation (...args) {
          store.commit.apply(store, [`${namespace}/${methodName}`].concat(args));
          return ret
        }
      });

      return ret
    }
  }
}

Jax.install = function (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[Jax] already installed. Vue.use(Jax) should be called only once.'
      )
    }
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

////////////////////////////////////////////
// helpers
function assert (condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}