import { _ as __nuxt_component_0$2 } from './nuxt-link-2X8I7ISh.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "nav",
  __ssrInlineRender: true,
  props: {
    routes: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-container" }, _attrs))} data-v-18ad1ad1><!--[-->`);
      ssrRenderList(_ctx.routes, (route) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link",
          to: route.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-18ad1ad1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mainTitle",
  __ssrInlineRender: true,
  props: {
    title: {},
    pinned: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["container", { pinned: _ctx.pinned }]
      }, _attrs))} data-v-aab9075f><h1 data-v-aab9075f>Helldivers 2</h1><h2 data-v-aab9075f>${ssrInterpolate(_ctx.title)}</h2></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mainTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aab9075f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    title: {},
    routes: {}
  },
  setup(__props) {
    const isPinned = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nav = __nuxt_component_0$1;
      const _component_MainTitle = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["header-container", { pinned: unref(isPinned) }]
      }, _attrs))} data-v-80d18e23>`);
      _push(ssrRenderComponent(_component_Nav, {
        class: "nav-container",
        routes: _ctx.routes
      }, null, _parent));
      _push(ssrRenderComponent(_component_MainTitle, {
        class: "title-container",
        title: _ctx.title,
        pinned: unref(isPinned)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80d18e23"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=header-DZVBbYv3.mjs.map
