import { Directive } from 'vue';
import { DirectiveBinding, VNode } from '@vue/runtime-core';

import './styles.scss';

import log from '@/log';

const map: WeakMap<HTMLElement, any> = new WeakMap<HTMLElement, HTMLElement>();

type Value = boolean;

export const Loader: Directive<HTMLElement, Value> = {
  created(el: HTMLElement, binding: DirectiveBinding<Value>, vnode: VNode<any, HTMLElement>, prevVNode: null): void {
    log.log('[LOADER] created', { el, binding, vnode, prevVNode });

    if (!map.has(el)) {
      const loading: HTMLDivElement = el.appendChild(document.createElement('div'));

      loading.className = 'v-loader';
      loading.style.position = 'absolute';
      loading.style.left = '0';
      loading.style.top = '0';
      loading.style.right = '0';
      loading.style.bottom = '0';
      loading.style.background = 'rgba(255, 255, 255, 0.5)';
      loading.style.display = binding.value ? 'block' : 'none';
      loading.style.zIndex = '100';

      map.set(el, loading);
    }
  },
  beforeMount(el: HTMLElement, binding: DirectiveBinding<Value>, vnode: VNode<any, HTMLElement>, prevVNode: null): void {
    log.log('[LOADER] beforeMount', { el, binding, vnode, prevVNode });
  },
  mounted(el: HTMLElement, binding: DirectiveBinding<Value>, vnode: VNode<any, HTMLElement>, prevVNode: null): void {
    log.log('[LOADER] mounted', { el, binding, vnode, prevVNode });
  },
  beforeUpdate(
    el: HTMLElement,
    binding: DirectiveBinding<Value>,
    vnode: VNode<any, HTMLElement>,
    prevVNode: VNode<any, HTMLElement>
  ): void {
    log.log('[LOADER] beforeUpdate', { el, binding, vnode, prevVNode });
  },
  updated(el: HTMLElement, binding: DirectiveBinding<Value>, vnode: VNode<any, HTMLElement>, prevVNode: VNode<any, HTMLElement>): void {
    log.log('[LOADER] updated', { el, binding, vnode, prevVNode });

    if (map.has(el)) {
      const loading: HTMLElement = map.get(el);

      loading.style.display = binding.value ? 'block' : 'none';
    }
  },
  beforeUnmount(el: HTMLElement, binding: DirectiveBinding<Value>, vnode: VNode<any, HTMLElement>, prevVNode: null): void {
    log.log('[LOADER] beforeUnmount', { el, binding, vnode, prevVNode });

    if (map.has(el)) {
      map.get(el).remove();
      map.delete(el);
    }
  },
  unmounted(el: HTMLElement, binding: DirectiveBinding<Value>, vnode: VNode<any, HTMLElement>, prevVNode: null): void {
    log.log('[LOADER] unmounted', { el, binding, vnode, prevVNode });
  },
  getSSRProps(binding: DirectiveBinding, vnode: VNode): Record<string, unknown> | undefined {
    log.log('[LOADER] getSSRProps', { binding, vnode });

    return undefined;
  },
};
