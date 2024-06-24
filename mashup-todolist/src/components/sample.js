import React, { useContext } from "react";
import {TodostateContext, TodoDispatchContext} from '..TodoContext';

function Sample() {
    const state = useContext(TodostateContext);
    const dispatch = useContext(TodoDispatchContext);
    return <div>Sample</div>
}