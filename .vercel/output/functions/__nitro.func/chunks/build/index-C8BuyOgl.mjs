import { _ as __nuxt_component_0 } from './header-DZVBbYv3.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withAsyncContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { P as PlanetCard } from './planetCard-0V6kV9C6.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-2X8I7ISh.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'db0';
import 'db0/connectors/better-sqlite3';
import './progressbar-DZw_Ga-n.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "desktopCardContainer",
  __ssrInlineRender: true,
  props: {
    planets: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const terminidPlanets = ref([]);
    const automatonPlanets = ref([]);
    terminidPlanets.value = ((_a = props.planets) == null ? void 0 : _a.filter((p) => p.faction === "Terminids")) || [];
    automatonPlanets.value = ((_b = props.planets) == null ? void 0 : _b.filter((p) => p.faction === "Automatons")) || [];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "desktop-card-container" }, _attrs))} data-v-e88e8874><div class="card-list" data-v-e88e8874><p data-v-e88e8874>Automaton controlled</p><!--[-->`);
      ssrRenderList(unref(automatonPlanets), (planet) => {
        _push(ssrRenderComponent(PlanetCard, {
          class: "planet-card",
          planet
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="card-list" data-v-e88e8874><p data-v-e88e8874>Terminid controlled</p><!--[-->`);
      ssrRenderList(unref(terminidPlanets), (planet) => {
        _push(ssrRenderComponent(PlanetCard, {
          class: "planet-card",
          planet
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/planets/desktopCardContainer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DesktopCardContainer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e88e8874"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "mobileCardContainer",
  __ssrInlineRender: true,
  props: {
    planets: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const terminidPlanets = ref([]);
    const automatonPlanets = ref([]);
    const selectedFaction = ref("Automatons");
    terminidPlanets.value = ((_a = props.planets) == null ? void 0 : _a.filter((p) => p.faction === "Terminids")) || [];
    automatonPlanets.value = ((_b = props.planets) == null ? void 0 : _b.filter((p) => p.faction === "Automatons")) || [];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-card-container" }, _attrs))} data-v-07dbdef3><div class="${ssrRenderClass([{ terminids: unref(selectedFaction) === "Terminids" }, "faction-selector"])}" data-v-07dbdef3><p class="${ssrRenderClass([{ selected: unref(selectedFaction) === "Automatons" }, "automaton-selector"])}" data-v-07dbdef3>Automatons</p><p class="${ssrRenderClass([{ selected: unref(selectedFaction) === "Terminids" }, "terminid-selector"])}" data-v-07dbdef3>Terminids</p></div><div class="card-list-container" data-v-07dbdef3><!--[-->`);
      ssrRenderList(unref(automatonPlanets), (planet) => {
        _push(ssrRenderComponent(PlanetCard, {
          class: "planet-card",
          style: unref(selectedFaction) === "Automatons" ? null : { display: "none" },
          planet
        }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(terminidPlanets), (planet) => {
        _push(ssrRenderComponent(PlanetCard, {
          class: "planet-card",
          style: unref(selectedFaction) === "Terminids" ? null : { display: "none" },
          planet
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/planets/mobileCardContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MobileCardContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-07dbdef3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const planets = ref([]);
    const routes = [
      {
        name: "Major Orders",
        to: "/orders"
      }
    ];
    planets.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/getActivePlanets")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-686acb68>`);
      _push(ssrRenderComponent(_component_Header, {
        title: "Galactic war status",
        routes
      }, null, _parent));
      _push(ssrRenderComponent(MobileCardContainer, { planets: unref(planets) }, null, _parent));
      _push(ssrRenderComponent(DesktopCardContainer, { planets: unref(planets) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-686acb68"]]);

export { index as default };
//# sourceMappingURL=index-C8BuyOgl.mjs.map
