import { QuartzFilterPlugin } from "../types"

export const HistoryNotesFilter: QuartzFilterPlugin<{}> = () => ({
  name: "HistoryNotesFilter",
  shouldPublish(_ctx, [_tree, vfile]) {
    const hasHistoryTag: boolean = (vfile.data?.frontmatter?.tags?.indexOf("history") ?? -1) > -1
    const inClassesFolder: boolean = vfile.path?.match("Classes/")?.[0] != null;
    const isClassFile: boolean = vfile.data?.frontmatter?.teacher == null;
    return hasHistoryTag && inClassesFolder && !isClassFile;
  },
})
