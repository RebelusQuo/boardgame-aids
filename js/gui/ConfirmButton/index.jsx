import { useState, useMemo, useRef } from 'react';

import { StyledConfirmButton } from './style';

import debounce from 'lodash/debounce';

export const Continue = Symbol('continue');
export const Reset = Symbol('reset');

const clickDelay = 500;
const timeoutDelay = 2000;
const leadingFlank = { leading: true, trailing: false };
const trailingFlank = { leading: false, trailing: true };

const color = new Map([
    [Continue, 'green'],
    [Reset, 'red'],
]);

export function ConfirmButton({ kind, onConfirm, onTimeout, children }) {
    const [init, setInit] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const state = useRef();
    state.current = { init, confirm };

    const debounceClick = useMemo(() => debounce(onEvent => onEvent(), clickDelay, leadingFlank), []);
    const debounceTimeout = useMemo(() => debounce(onEvent => onEvent(), timeoutDelay, trailingFlank), []);

    function onClick() {
        if (!init) {
            setInit(true);
            debounceTimeout(onInternalTimeout);
        }
        else if (!confirm) {
            setConfirm(true);
            onConfirm?.();
        }
    }

    function onInternalTimeout() {
        const { init, confirm } = state.current;

        if (init && !confirm) {
            onTimeout?.();
        }

        setInit(false);
        setConfirm(false);
    }

    return <StyledConfirmButton
        $bg={init && !confirm ? color.get(kind) : null}
        onClick={() => debounceClick(onClick)}
    >
        {children}
    </StyledConfirmButton>;
}
