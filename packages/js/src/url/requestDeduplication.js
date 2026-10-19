/** Gộp các thao tác đang chạy theo khóa; chỉ dọn nếu đúng Promise hiện tại. */
export function requestDeduplication() {
  const pending = new Map();
  return {
    run(key, factory) {
      if (typeof factory !== 'function') throw new TypeError('factory must be a function');
      if (pending.has(key)) return pending.get(key);
      const task = Promise.resolve().then(factory);
      const shared = task.finally(() => { if (pending.get(key) === shared) pending.delete(key); });
      pending.set(key, shared);
      return shared;
    },
    has: key => pending.has(key),
    get size() { return pending.size; }
  };
}
