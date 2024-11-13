
export enum ExtensionHostKind {
    LocalProcess = 1,
    LocalWebWorker = 2,
    Remote = 3
}
export enum ExtensionRunningPreference {
    None = 0,
    Local = 1,
    Remote = 2
}

export enum ViewContainerLocation {
    Sidebar = 0,
    Panel = 1,
    AuxiliaryBar = 2
}

export enum ConfirmResult {
    SAVE = 0,
    DONT_SAVE = 1,
    CANCEL = 2
}

export enum Parts {
    TITLEBAR_PART = "workbench.parts.titlebar",
    BANNER_PART = "workbench.parts.banner",
    ACTIVITYBAR_PART = "workbench.parts.activitybar",
    SIDEBAR_PART = "workbench.parts.sidebar",
    PANEL_PART = "workbench.parts.panel",
    AUXILIARYBAR_PART = "workbench.parts.auxiliarybar",
    EDITOR_PART = "workbench.parts.editor",
    STATUSBAR_PART = "workbench.parts.statusbar"
}
