import { Directive } from "vue";
import { DirectiveBinding, VNode } from "@vue/runtime-core";

import log from "@/log";

type Value = boolean;

export const Loader: Directive<HTMLElement, Value> = {
  created(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: null
  ): void {
    log.log("Loader:created", { el, binding, vnode, prevVNode });
  },
  beforeMount(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: null
  ): void {
    log.log("Loader:beforeMount", { el, binding, vnode, prevVNode });
  },
  mounted(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: null
  ): void {
    log.log("Loader:mounted", { el, binding, vnode, prevVNode });
  },
  beforeUpdate(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: VNode<any, HTMLElement>
  ): void {
    log.log("Loader:beforeUpdate", { el, binding, vnode, prevVNode });
  },
  updated(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: VNode<any, HTMLElement>
  ): void {
    log.log("Loader:updated", { el, binding, vnode, prevVNode });
  },
  beforeUnmount(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: null
  ): void {
    log.log("Loader:beforeUnmount", { el, binding, vnode, prevVNode });
  },
  unmounted(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: null
  ): void {
    log.log("Loader:unmounted", { el, binding, vnode, prevVNode });
  },
  getSSRProps(
    binding: DirectiveBinding,
    vnode: VNode
  ): Record<string, unknown> | undefined {
    log.log("Loader:getSSRProps", { binding, vnode });

    return undefined;
  },
};
