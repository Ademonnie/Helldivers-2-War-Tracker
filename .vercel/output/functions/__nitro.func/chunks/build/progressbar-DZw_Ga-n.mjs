import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'db0';
import 'db0/connectors/better-sqlite3';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "progressbar",
  __ssrInlineRender: true,
  props: {
    progress: {},
    faction: {}
  },
  setup(__props) {
    const props = __props;
    const terminid = ref(false);
    const automaton = ref(false);
    terminid.value = props.faction === "Terminids";
    automaton.value = props.faction === "Automatons";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bar", { terminid: unref(terminid), automaton: unref(automaton) }]
      }, _attrs))} data-v-29cc5df3><div class="progress" style="${ssrRenderStyle({ width: _ctx.progress + "%" })}" data-v-29cc5df3></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/progressbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29cc5df3"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=progressbar-DZw_Ga-n.mjs.map
