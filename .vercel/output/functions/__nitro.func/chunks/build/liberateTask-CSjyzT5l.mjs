import { useSSRContext, defineComponent, ref, withAsyncContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { P as PlanetCard } from './planetCard-0V6kV9C6.mjs';
import { _ as _export_sfc } from './server.mjs';
import './progressbar-DZw_Ga-n.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "inactivePlanetCard",
  __ssrInlineRender: true,
  props: {
    planet: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const biome = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return JSON.parse((_a = props.planet) == null ? void 0 : _a.biome);
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "planet-card-container" }, _attrs))} data-v-a89d798a><div class="planet-name" data-v-a89d798a><h3 data-v-a89d798a>${ssrInterpolate(((_a = _ctx.planet) == null ? void 0 : _a.name) || "Unknown planet")}</h3></div><div class="planet-info" data-v-a89d798a><p class="biome" data-v-a89d798a>Biome: ${ssrInterpolate(((_b = unref(biome)) == null ? void 0 : _b.slug) || "Unknown")}</p><p class="owner" data-v-a89d798a>Controlled by ${ssrInterpolate(_ctx.planet.owner)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/planets/inactivePlanetCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InactivePlanetCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a89d798a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "liberateTask",
  __ssrInlineRender: true,
  props: {
    task: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const targetPlanet = ref();
    const targetActivePlanet = ref();
    const planetData = ([__temp, __restore] = withAsyncContext(() => $fetch(`/api/getPlanet/${props.task.values[2]}`)), __temp = await __temp, __restore(), __temp);
    const activePlanetData = ([__temp, __restore] = withAsyncContext(() => $fetch(`/api/getActivePlanet/${props.task.values[2]}`)), __temp = await __temp, __restore(), __temp);
    targetPlanet.value = Array.isArray(planetData) ? planetData[0] : void 0;
    targetActivePlanet.value = Array.isArray(activePlanetData) ? activePlanetData[0] : void 0;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(targetActivePlanet)) {
        _push(ssrRenderComponent(PlanetCard, { planet: unref(targetActivePlanet) }, null, _parent));
      } else if (unref(targetPlanet)) {
        _push(ssrRenderComponent(InactivePlanetCard, { planet: unref(targetPlanet) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/liberateTask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=liberateTask-CSjyzT5l.mjs.map
