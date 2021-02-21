import { AbstractUIMenuPanel, Menu } from '../';
import { Rectangle, Sprite, Text } from '../../';
import { BadgeStyle } from '../../../enums';
import { Color, LiteEvent, Point, Size } from '../../../utils';
export declare class UIMenuItem {
    static badgeToTextureDict(badge: BadgeStyle): string;
    static getBadgeSpriteWidthOffset(sprite: Sprite): number;
    static getBadgeSpriteHeightOffset(sprite: Sprite): number;
    static getBadgeSize(badge: BadgeStyle): Size;
    static defaultBackColor: Color;
    static defaultHighlightedBackColor: Color;
    static defaultHoveredBackColor: Color;
    static defaultForeColor: Color;
    static defaultHoveredForeColor: Color;
    static defaultHighlightedForeColor: Color;
    readonly id: string;
    enabled: boolean;
    selected: boolean;
    hovered: boolean;
    offset: Point;
    parent: Menu;
    readonly activated: LiteEvent;
    readonly panelActivated: LiteEvent;
    protected supportsDescription: boolean;
    protected supportsPanels: boolean;
    protected supportsLeftBadge: boolean;
    protected supportsRightBadge: boolean;
    protected supportsRightLabel: boolean;
    protected readonly rectangle: Rectangle;
    protected readonly text: Text;
    protected readonly selectedSprite: Sprite;
    protected readonly badgeLeft: Sprite;
    protected readonly badgeRight: Sprite;
    protected readonly labelText: Text;
    private _description;
    private _formattedDescription;
    private _backColor;
    private _highlightedBackColor;
    private _foreColor;
    private _highlightedForeColor;
    private _leftBadge;
    private _rightBadge;
    private _event;
    private _panels;
    constructor(text: string, description?: string);
    get Text(): string;
    set Text(value: string);
    get Description(): string;
    set Description(value: string);
    get FormattedDescription(): string;
    get BackColor(): Color;
    set BackColor(value: Color);
    get HighlightedBackColor(): Color;
    set HighlightedBackColor(value: Color);
    get ForeColor(): Color;
    set ForeColor(value: Color);
    get HighlightedForeColor(): Color;
    set HighlightedForeColor(value: Color);
    get LeftBadge(): BadgeStyle;
    set LeftBadge(value: BadgeStyle);
    get RightBadge(): BadgeStyle;
    set RightBadge(value: BadgeStyle);
    get RightLabel(): string;
    set RightLabel(value: string);
    get IsMouseInBounds(): boolean;
    get Panels(): AbstractUIMenuPanel[];
    set Panels(value: AbstractUIMenuPanel[]);
    addPanel(panel: AbstractUIMenuPanel | AbstractUIMenuPanel[]): void;
    findPanelIndex(panel: AbstractUIMenuPanel): number;
    removePanel(panelOrIndex: AbstractUIMenuPanel | number): void;
    addEvent(event: string, ...args: unknown[]): void;
    fireEvent(): void;
    formatDescription(): void;
    badgeToTextureName(badge: BadgeStyle): string;
    badgeToColor(badge: BadgeStyle): Color;
    setVerticalPosition(y: number): void;
    draw(): void;
}
