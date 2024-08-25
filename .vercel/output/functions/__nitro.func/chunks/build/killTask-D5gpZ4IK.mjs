import __nuxt_component_0 from './progressbar-DZw_Ga-n.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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

function getTargetName(type) {
  let targetName = "";
  switch (type) {
    case 0:
      targetName = "Terminids";
      break;
    case 2514244534:
      targetName = "Bile Titans";
  }
  return targetName;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "killTask",
  __ssrInlineRender: true,
  props: {
    task: {},
    progress: {}
  },
  setup(__props) {
    const props = __props;
    const targetAmount = ref("");
    const targetName = ref("");
    targetAmount.value = new Intl.NumberFormat("fr-FR").format(props.task.values[2] || 0);
    targetName.value = getTargetName(props.task.values[3]);
    const taskProgress = computed(() => {
      return 100 * props.progress / props.task.values[2];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Progressbar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><p>Kill <strong>${ssrInterpolate(unref(targetAmount))} ${ssrInterpolate(unref(targetName))}</strong></p><p>Current : ${ssrInterpolate(_ctx.progress)}</p>`);
      _push(ssrRenderComponent(_component_Progressbar, {
        progress: unref(taskProgress),
        faction: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/killTask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=killTask-D5gpZ4IK.mjs.map
