import { Block } from "./types";

export function blocks_to_desc(block: Block[]): string {
    let res = "";
    block.forEach((block) => {
        res += block.export_string();
    });

    return res;
}
