import { _ as __nuxt_component_0 } from './header-DZVBbYv3.mjs';
import { useSSRContext, defineComponent, ref, unref, createVNode, resolveDynamicComponent, mergeProps, withAsyncContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-2X8I7ISh.mjs';
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

function getRemainingTime(time) {
  let remainingTime = "";
  const days = Math.trunc(time / (24 * 60 * 60));
  const hours = Math.trunc((time - days * 24 * 60 * 60) / (60 * 60));
  const min = Math.trunc((time - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
  remainingTime = `${days}D ${hours}H ${min}M`;
  return remainingTime;
}
function getTaskStatus(task, progress) {
  let status = false;
  switch (task.type) {
    case 3:
      status = task.values[2] === progress;
      break;
    default:
      status = progress === 1;
  }
  return status;
}
function getTaskData(type) {
  let data = {
    description: "",
    component: ""
  };
  switch (type) {
    case 3:
      data.description = "Kill the following amount of enemies:";
      data.component = "killTask";
      break;
    case 11:
      data.description = "The following planets must be under Super Earth control:";
      data.component = "LiberateTask";
      break;
    case 12:
      data.description = "Succesfully defend the follwing number of planets:";
      data.component = "DefenseTask";
      break;
    case 13:
      data.description = "Hold control of the following planet:", data.component = "LiberateTask";
      break;
  }
  return data;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "taskContainer",
  __ssrInlineRender: true,
  props: {
    task: {},
    completed: { type: Boolean },
    progress: {}
  },
  setup(__props) {
    const props = __props;
    const taskData = ref();
    taskData.value = getTaskData(props.task.type);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-22bf457e><div class="task-info" data-v-22bf457e><div class="${ssrRenderClass([{ completed: _ctx.completed }, "status"])}" data-v-22bf457e></div><p data-v-22bf457e>${ssrInterpolate((_a = unref(taskData)) == null ? void 0 : _a.description)}</p></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_b = unref(taskData)) == null ? void 0 : _b.component), {
        task: _ctx.task,
        progress: _ctx.progress
      }, null), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/orders/taskContainer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TaskContainer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-22bf457e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MajorOrderContainer",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    const props = __props;
    const tasks = ref([]);
    const taskStatus = ref([]);
    const timeRemaining = ref("");
    timeRemaining.value = getRemainingTime(props.order.expiresIn);
    tasks.value = JSON.parse(props.order.tasks);
    tasks.value.forEach((task, index) => {
      taskStatus.value[index] = getTaskStatus(task, props.order.progress[index]);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-container" }, _attrs))} data-v-b98a3985><h3 data-v-b98a3985>Brief: </h3><p class="order-context" data-v-b98a3985>${ssrInterpolate(_ctx.order.brief)}</p>`);
      if (_ctx.order.brief !== _ctx.order.description) {
        _push(`<p class="order-context" data-v-b98a3985>${ssrInterpolate(_ctx.order.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 data-v-b98a3985>Time Remaining: <strong class="time" data-v-b98a3985>${ssrInterpolate(unref(timeRemaining))}</strong></h3><div class="task-list" data-v-b98a3985><h3 data-v-b98a3985><strong data-v-b98a3985>Tasks :</strong></h3><!--[-->`);
      ssrRenderList(unref(tasks), (task, index) => {
        _push(ssrRenderComponent(TaskContainer, {
          class: "task-container",
          task,
          completed: unref(taskStatus)[index],
          progress: _ctx.order.progress[index]
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/orders/MajorOrderContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MajorOrderContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b98a3985"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const routes = [
      {
        name: "War Status",
        to: "/"
      }
    ];
    const orders2 = ref([]);
    orders2.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/getMo")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3a0de36b>`);
      _push(ssrRenderComponent(_component_Header, {
        title: "Major Order",
        routes
      }, null, _parent));
      if (unref(orders2).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(orders2), (order) => {
          _push(ssrRenderComponent(MajorOrderContainer, { order }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<h2 class="no-order-message" data-v-3a0de36b>No active Major Order</h2>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a0de36b"]]);

export { orders as default };
//# sourceMappingURL=orders-BethaUFo.mjs.map
