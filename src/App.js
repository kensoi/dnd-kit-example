import React, { useState } from "react";

import "css/app.css";
import SortableList from "./SortableList";

import {
    getMockItems
} from "utilities";

function LinkToCodeSandbox () {
    return <a
        href="https://codesandbox.io/s/dnd-kit-sortable-starter-template-22x1ix?file=/src/App.tsx"
    >
        CodeSandbox
    </a>
}

export default function App() {
    const [items, setItems] = useState(getMockItems)

    return (
        <div className="x-block">
            <div className="headline">
                @dnd-kit example
            </div>
            <div className="paragraph">
                Copied from <LinkToCodeSandbox />
            </div>
            <SortableList
                items={items}
                onChange={setItems}
                renderItem={(item) => (
                    <SortableList.Item id={item.id}>
                        {item.id}
                        <SortableList.DragHandle />
                    </SortableList.Item>
                )}
            />
        </div>
    );
}
