const EditorFileFlags = {
  None: 0,
  New: 1,
  Export: 2,
  Close: 4,
  Exit: 8,
};
const EditorEditFlags = {
  None: 0,
  Undo: 1,
  Redo: 2,
  Settings: 4,
};
const EditorWindowFlags = {
  None: 0,
  Preview: 1,
  Selection: 2,
  Palette: 4,
  ShowUI: 8,
  ResetUI: 16,
};
const EditorHelpFlags = {
  None: 0,
  Support: 1,
  FAQ: 2,
  Documentation: 4,
};
const EditorPrototypeFlags = {
  None: 0,
  Restart: 1,
  SelectFlow: 2,
  BrushFlow: 4,
  CopyFlow: 8,
  StampFlow: 16,
  CreativePaletteFlow: 32,
};
const EditorActionFlags = {
  None: 0,
  Undo: 1,
  Redo: 2,
  Cut: 4,
  Copy: 8,
  Paste: 16,
  Players: 32,
  Sessions: 64,
};
const EditorThemes = {
  Dark: 0,
  Light: 1,
  Redstone: 2,
  HightContrast: 3,
};

const EDITOR_FACET = 'vanilla.editor'

const editorFacet = {
  editorTools: {
    selectedTool: 0,
  },
  fileFlags: EditorFileFlags.New,
  editFlags: EditorEditFlags.Settings,
  windowFlags: EditorWindowFlags.ShowUI,
  helpFlags: EditorHelpFlags.Documentation,
  prototypeFlags: EditorPrototypeFlags.Restart,
  actionFlags: EditorActionFlags.Players,
  editorSettings: {
    theme: EditorThemes.Dark,
  }
};