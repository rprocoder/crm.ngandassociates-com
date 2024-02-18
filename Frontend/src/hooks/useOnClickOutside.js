import { useEffect } from 'react';
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            var _a;
            const el = (_a = ref) === null || _a === void 0 ? void 0 : _a.current;
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);
        return () => {
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
        // Reload only if ref or handler changes
    }, [ref, handler]);
}
export default useOnClickOutside;
