
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire7319"];
var parcelRegister = parcelRequire.register;
parcelRegister("lsPed", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "tiles", () => $93ded6b8843cf829$export$ecca9d8de1f295ef);
$parcel$export(module.exports, "default", () => $93ded6b8843cf829$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $eaw0J = parcelRequire("eaw0J");

var $aiED1 = parcelRequire("aiED1");

var $caGMv = parcelRequire("caGMv");

var $aajMz = parcelRequire("aajMz");

var $8uppp = parcelRequire("8uppp");

var $hMrfG = parcelRequire("hMrfG");

var $cBEXC = parcelRequire("cBEXC");

var $3hRtl = parcelRequire("3hRtl");

var $dpp5R = parcelRequire("dpp5R");

var $2XZ0q = parcelRequire("2XZ0q");

var $eBrO1 = parcelRequire("eBrO1");
parcelRequire("XDU19");
const $93ded6b8843cf829$export$ecca9d8de1f295ef = (0, $eBrO1.default).parse("-\r\n  -\r\n    Count: 2\r\n    Type: Flood\r\n    Kind: 4\r\n    Hand: Green\r\n  -\r\n    Count: 1\r\n    Type: Flood\r\n    Kind: 3\r\n    Hand: Black\r\n  -\r\n    Count: 1\r\n    Type: Flood\r\n    Kind: 3\r\n    Hand: Green\r\n  -\r\n    Count: 1\r\n    Type: Flood\r\n    Kind: 2\r\n    Hand: Black\r\n  -\r\n    Count: 1\r\n    Type: Flood\r\n    Kind: 2\r\n    Hand: Green\r\n  -\r\n    Count: 2\r\n    Type: Drought\r\n    Kind: 4\r\n    Hand: Green\r\n  -\r\n    Count: 1\r\n    Type: Drought\r\n    Kind: 3\r\n    Hand: Black\r\n  -\r\n    Count: 1\r\n    Type: Drought\r\n    Kind: 3\r\n    Hand: Green\r\n  -\r\n    Count: 1\r\n    Type: Drought\r\n    Kind: 2\r\n    Hand: Black\r\n  -\r\n    Count: 1\r\n    Type: Drought\r\n    Kind: 2\r\n    Hand: Green\r\n  -\r\n    Count: 2\r\n    Type: Rockslide\r\n    Kind: 4\r\n    Hand: Green\r\n  -\r\n    Count: 1\r\n    Type: Rockslide\r\n    Kind: 3\r\n    Hand: Black\r\n  -\r\n    Count: 1\r\n    Type: Rockslide\r\n    Kind: 3\r\n    Hand: Green\r\n  -\r\n    Count: 1\r\n    Type: Rockslide\r\n    Kind: 2\r\n    Hand: Black\r\n  -\r\n    Count: 1\r\n    Type: Rockslide\r\n    Kind: 2\r\n    Hand: Green\r\n  -\r\n    Count: 9\r\n    Type: Bandit\r\n    Kind: Green\r\n    Hand: Green\r\n  -\r\n    Count: 8\r\n    Type: Bandit\r\n    Kind: Orange\r\n    Hand: Black\r\n-\r\n  -\r\n    Count: 11\r\n    Type: Cowboy\r\n  -\r\n    Count: 11\r\n    Type: Builder\r\n  -\r\n    Count: 11\r\n    Type: Engineer\r\n-\r\n  -\r\n    Count: 7\r\n    Type: Cowboy\r\n  -\r\n    Count: 7\r\n    Type: Builder\r\n  -\r\n    Count: 7\r\n    Type: Engineer\r\n  -\r\n    Count: 2\r\n    Type: Bandit\r\n    Kind: Green\r\n    Hand: Green\r\n  -\r\n    Count: 3\r\n    Type: Bandit\r\n    Kind: Orange\r\n    Hand: Black\r\n");
(0, (/*@__PURE__*/$parcel$interopDefault($cBEXC)))($93ded6b8843cf829$export$ecca9d8de1f295ef, (bag)=>(0, (/*@__PURE__*/$parcel$interopDefault($cBEXC)))(bag, (tile)=>tile.Count = ~~tile.Count));
function $93ded6b8843cf829$export$2e2bcd8739ae039() {
    const [state, setState] = (0, $eaw0J.useLocalStorage)("great-western-trail--state");
    const [settings, setSettings] = (0, $eaw0J.useLocalStorage)("great-western-trail--settings", {
        bot: false,
        players: 4,
        rttn: false
    });
    const { bot: bot, players: players, rttn: rttn } = settings;
    const bags = (0, $d4J5n.useRef)();
    const deliveredRef = (0, $d4J5n.useRef)();
    (0, $d4J5n.useEffect)(()=>{
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($dpp5R)))(state?.bags) && (0, (/*@__PURE__*/$parcel$interopDefault($dpp5R)))(bags.current)) bags.current = (0, $8uppp.restoreBags)(state.bags);
    }, [
        state?.bags
    ]);
    (0, $d4J5n.useEffect)(()=>{
        if (state?.stage === "delivered") deliveredRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        state?.stage,
        state?.foresight
    ]);
    function onChangePlayers(value) {
        const match = /(\*)?(\d+)/.exec(value) || [];
        setSettings({
            ...settings,
            bot: match[1] === "*",
            players: ~~match[2]
        });
    }
    function onChangeRttn(checked) {
        setSettings({
            ...settings,
            rttn: checked
        });
    }
    function onSetup() {
        const [state, _bags] = (0, $8uppp.setup)((0, (/*@__PURE__*/$parcel$interopDefault($3hRtl)))($93ded6b8843cf829$export$ecca9d8de1f295ef), bot, players, rttn);
        bags.current = _bags;
        setState({
            ...state,
            stage: "setup"
        });
    }
    function onDelivered() {
        const [_state, _bags] = (0, $8uppp.delivered)(state, bags.current);
        bags.current = _bags;
        setState({
            ..._state,
            stage: "delivered"
        });
    }
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsxs)("div", {
                children: [
                    (0, (/*@__PURE__*/$parcel$interopDefault($dpp5R)))(state) ? /*#__PURE__*/ (0, $228IU.jsx)((0, $aiED1.Button), {
                        onClick: onSetup,
                        children: "Setup"
                    }) : /*#__PURE__*/ (0, $228IU.jsx)((0, $aiED1.ConfirmButton), {
                        kind: (0, $aiED1.Reset),
                        onConfirm: onSetup,
                        children: "Setup"
                    }),
                    /*#__PURE__*/ (0, $228IU.jsxs)("select", {
                        value: (bot ? "*" : "") + players,
                        onChange: (e)=>onChangePlayers(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, $228IU.jsx)("option", {
                                value: "4",
                                children: "4 Players"
                            }),
                            /*#__PURE__*/ (0, $228IU.jsx)("option", {
                                value: "3",
                                children: "3 Players"
                            }),
                            /*#__PURE__*/ (0, $228IU.jsx)("option", {
                                value: "2",
                                children: "2 Players"
                            }),
                            /*#__PURE__*/ (0, $228IU.jsx)("option", {
                                value: "*3",
                                children: "2 Players w/ bot"
                            }),
                            /*#__PURE__*/ (0, $228IU.jsx)("option", {
                                value: "*2",
                                children: "1 Player w/ bot"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $228IU.jsxs)("label", {
                        children: [
                            /*#__PURE__*/ (0, $228IU.jsx)("input", {
                                type: "checkbox",
                                checked: rttn,
                                onChange: (e)=>onChangeRttn(e.target.checked)
                            }),
                            " ",
                            "Rails to the North"
                        ]
                    })
                ]
            }),
            (0, (/*@__PURE__*/$parcel$interopDefault($dpp5R)))(state) ? null : /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.SetupList), {
                children: [
                    /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.SetupListRow), {
                        children: [
                            /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.PrivateBuildings), {
                                $rttn: state.rttn,
                                children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.private, (t, i)=>/*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.BuildingFlex), {
                                                children: [
                                                    i + 1,
                                                    t
                                                ]
                                            }, i),
                                            state.rttn && (0, $2XZ0q.default)(i + 1, [
                                                4,
                                                8
                                            ]) ? /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Wrap), {}, `w${i}`) : null
                                        ]
                                    }))
                            }),
                            !state.neutral ? null : /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.NeutralBuildings), {
                                children: [
                                    /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.TrailPath), {}),
                                    /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.NeutralBuildingGrid), {
                                        children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.neutral, (t, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.BuildingCell), {
                                                $area: String.fromCharCode("a".charCodeAt(0) + i),
                                                children: t
                                            }, i))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.Rails), {
                        $rttn: state.rttn,
                        children: [
                            (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.stationMasters, (k, i)=>/*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                            children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.StationMasterTile), {
                                                tile: k + 1
                                            })
                                        }, `sm${i}`),
                                        state.rttn && i + 1 === 5 ? /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Wrap), {}, `w${i}`) : null
                                    ]
                                })),
                            (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.mediumTowns, (k, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $228IU.Fragment), {
                                    children: /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Town), {
                                        children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.MediumTownTile), {
                                            tile: k + 1
                                        })
                                    }, `mt${i}`)
                                }))
                        ]
                    }),
                    /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.Trail), {
                        children: [
                            /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.TrailVerticalHazzards), {
                                children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.trail.Drought, ({ Type: Type, Kind: Kind, Hand: Hand }, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                        children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                            type: Type,
                                            kind: Kind,
                                            hand: Hand
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.TrailHorizontalHazzards), {
                                children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.trail.Flood, ({ Type: Type, Kind: Kind, Hand: Hand }, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                        children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                            type: Type,
                                            kind: Kind,
                                            hand: Hand
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.TrailVerticalHazzards), {
                                children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.trail.Rockslide, ({ Type: Type, Kind: Kind, Hand: Hand }, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                        children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                            type: Type,
                                            kind: Kind,
                                            hand: Hand
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ (0, $228IU.jsxs)((0, $caGMv.TrailBandits), {
                                children: [
                                    /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {}),
                                    (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.trail.Bandit, ({ Type: Type, Kind: Kind, Hand: Hand }, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                            children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                                type: Type,
                                                kind: Kind,
                                                hand: Hand
                                            })
                                        }, i))
                                ]
                            })
                        ]
                    }),
                    state.bot && /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.InitialMarket), {
                        $count: 1,
                        children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.bot_focus, ({ Type: Type })=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                    type: Type
                                })
                            }))
                    }),
                    /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.InitialMarket), {
                        $count: state.players,
                        children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.market, ({ Type: Type }, i)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                    type: Type
                                })
                            }, i))
                    }),
                    /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Foresight), {
                        children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(state.foresight, (x, i)=>{
                            const { Type: Type, Kind: Kind, Hand: Hand } = x || {};
                            return /*#__PURE__*/ (0, $228IU.jsx)((0, $caGMv.Tile), {
                                children: x ? /*#__PURE__*/ (0, $228IU.jsx)((0, $aajMz.BagTile), {
                                    type: Type,
                                    kind: Kind,
                                    hand: Hand
                                }) : null
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ (0, $228IU.jsx)("div", {
                        ref: deliveredRef,
                        children: /*#__PURE__*/ (0, $228IU.jsx)((0, $aiED1.ConfirmButton), {
                            kind: (0, $aiED1.Continue),
                            onConfirm: onDelivered,
                            children: "Delivered"
                        })
                    })
                ]
            })
        ]
    });
}

});
parcelRegister("caGMv", function(module, exports) {

$parcel$export(module.exports, "SetupList", () => $8dc79ab02fb6e352$export$dfcd30bedbd4324c);
$parcel$export(module.exports, "SetupListRow", () => $8dc79ab02fb6e352$export$680d2b030b46baee);
$parcel$export(module.exports, "Wrap", () => $8dc79ab02fb6e352$export$f6b1e3902165e5e1);
$parcel$export(module.exports, "PrivateBuildings", () => $8dc79ab02fb6e352$export$85620d6a5475810f);
$parcel$export(module.exports, "NeutralBuildings", () => $8dc79ab02fb6e352$export$204f72fb1b4bb6a8);
$parcel$export(module.exports, "NeutralBuildingGrid", () => $8dc79ab02fb6e352$export$32b8c73024ef7941);
$parcel$export(module.exports, "Tile", () => $8dc79ab02fb6e352$export$235cb65c20ad2b7);
$parcel$export(module.exports, "Town", () => $8dc79ab02fb6e352$export$902758e78321860d);
$parcel$export(module.exports, "BuildingFlex", () => $8dc79ab02fb6e352$export$ee4c063083d31525);
$parcel$export(module.exports, "BuildingCell", () => $8dc79ab02fb6e352$export$e06a92fa4fb11fdf);
$parcel$export(module.exports, "Rails", () => $8dc79ab02fb6e352$export$3d00b828718ce73);
$parcel$export(module.exports, "TrailVerticalHazzards", () => $8dc79ab02fb6e352$export$53c3d0db97da8ab5);
$parcel$export(module.exports, "TrailHorizontalHazzards", () => $8dc79ab02fb6e352$export$d985f94efe295d33);
$parcel$export(module.exports, "TrailBandits", () => $8dc79ab02fb6e352$export$1504683314ea26e);
$parcel$export(module.exports, "Trail", () => $8dc79ab02fb6e352$export$3b8b9d47fbf8fd2b);
$parcel$export(module.exports, "InitialMarket", () => $8dc79ab02fb6e352$export$124f76c8842bd329);
$parcel$export(module.exports, "Foresight", () => $8dc79ab02fb6e352$export$70a0e435d96b318d);

var $4bmt0 = parcelRequire("4bmt0");
const $8dc79ab02fb6e352$export$dfcd30bedbd4324c = (0, $4bmt0.default).div`
  margin: calc(.5*3mm) 0;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3mm;
`;
const $8dc79ab02fb6e352$export$680d2b030b46baee = (0, $4bmt0.default).div`
  display: flex;
  gap: 3mm;
`;
const $8dc79ab02fb6e352$var$Grid = (0, $4bmt0.default).div`
  display: grid;
  gap: 3mm;
`;
const $8dc79ab02fb6e352$export$f6b1e3902165e5e1 = (0, $4bmt0.default).div``;
const $8dc79ab02fb6e352$export$85620d6a5475810f = (0, $4bmt0.default).div`
  width: calc(${({ $rttn: $rttn })=>$rttn ? 5 : 4}*25mm);
  height: calc(3*25mm);
  margin: calc(-3mm/2);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * { flex: none; }

  ${$8dc79ab02fb6e352$export$f6b1e3902165e5e1} {
    flex-basis: 100%;
    height: 0;
  }
`;
const $8dc79ab02fb6e352$export$204f72fb1b4bb6a8 = (0, $4bmt0.default).div`
  width: calc(3 * 22mm + 2 * 3mm);
  height: calc(3 * 22mm + 2 * 3mm);
  position: relative;
  & > * { position: absolute; }
`;
const $8dc79ab02fb6e352$export$32b8c73024ef7941 = (0, $4bmt0.default)($8dc79ab02fb6e352$var$Grid)`
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(3, min-content);
  grid-template-areas:
    "g f ."
    "c d e"
    "b . a"
`;
const $8dc79ab02fb6e352$export$235cb65c20ad2b7 = (0, $4bmt0.default).div`
  width: 22mm;
  height: 26mm;
  margin: calc(3mm/2);
`;
const $8dc79ab02fb6e352$export$902758e78321860d = (0, $4bmt0.default)($8dc79ab02fb6e352$export$235cb65c20ad2b7)`
  height: 22mm;
`;
const $8dc79ab02fb6e352$var$Building = (0, $4bmt0.default)($8dc79ab02fb6e352$export$902758e78321860d)`
  margin: 0;
  border: .8mm solid black;
  border-radius: 3mm;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
`;
const $8dc79ab02fb6e352$export$ee4c063083d31525 = (0, $4bmt0.default)($8dc79ab02fb6e352$var$Building)`
  margin: calc(3mm/2);
`;
const $8dc79ab02fb6e352$export$e06a92fa4fb11fdf = (0, $4bmt0.default)($8dc79ab02fb6e352$var$Building)`
  grid-area: ${({ $area: $area })=>$area};
`;
const $8dc79ab02fb6e352$export$3d00b828718ce73 = (0, $4bmt0.default).div`
  width: calc(${({ $rttn: $rttn })=>$rttn ? 8 : 5}*25mm);
  height: calc(${({ $rttn: $rttn })=>$rttn ? 2 : 1}*29mm);
  margin: calc(-3mm/2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;

  & > * { flex: none; }

  ${$8dc79ab02fb6e352$export$f6b1e3902165e5e1} {
    flex-basis: 100%;
    height: 0;
  }

  :nth-child(7 of ${$8dc79ab02fb6e352$export$235cb65c20ad2b7}) { order: 1; }
  :nth-child(-n+3 of ${$8dc79ab02fb6e352$export$902758e78321860d}) { order: 1; }
`;
const $8dc79ab02fb6e352$var$TrailTiles = (0, $4bmt0.default).div`
  margin: calc(-3mm/2);
  display: flex;
`;
const $8dc79ab02fb6e352$export$53c3d0db97da8ab5 = (0, $4bmt0.default)($8dc79ab02fb6e352$var$TrailTiles)`
  width: 25mm;
  flex-direction: column-reverse;
`;
const $8dc79ab02fb6e352$export$d985f94efe295d33 = (0, $4bmt0.default)($8dc79ab02fb6e352$var$TrailTiles)`
  height: 29mm;
  flex-direction: row-reverse;
`;
const $8dc79ab02fb6e352$export$1504683314ea26e = (0, $4bmt0.default)($8dc79ab02fb6e352$var$TrailTiles)`
  width: calc(4*25mm);
  flex-wrap: wrap;
  align-content: end;
`;
const $8dc79ab02fb6e352$export$3b8b9d47fbf8fd2b = (0, $4bmt0.default)($8dc79ab02fb6e352$var$Grid)`
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "d b r"
    "d f r";
  :nth-child(1 of ${$8dc79ab02fb6e352$export$53c3d0db97da8ab5}) { grid-area: d; }
  :nth-child(2 of ${$8dc79ab02fb6e352$export$53c3d0db97da8ab5}) { grid-area: r; }
  & > ${$8dc79ab02fb6e352$export$d985f94efe295d33} { grid-area: f; }
  & > ${$8dc79ab02fb6e352$export$1504683314ea26e} { grid-area: b; }
`;
const $8dc79ab02fb6e352$var$BagTileColumns = (0, $4bmt0.default).div`
  margin: calc(-3mm/2);
  width: calc(3*25mm);
  display: flex;
  flex-wrap: wrap;
`;
const $8dc79ab02fb6e352$export$124f76c8842bd329 = (0, $4bmt0.default)($8dc79ab02fb6e352$var$BagTileColumns)`
  width: calc(${({ $count: $count })=>$count}*25mm);
  border-bottom: 1px solid black;
`;
const $8dc79ab02fb6e352$export$70a0e435d96b318d = (0, $4bmt0.default)($8dc79ab02fb6e352$var$BagTileColumns)`
  flex-direction: row-reverse;
`;

});

parcelRegister("aajMz", function(module, exports) {

$parcel$export(module.exports, "TrailPath", () => $86ce5f136d8a0e82$export$d90cf5631a50ca69);
$parcel$export(module.exports, "BagTile", () => $86ce5f136d8a0e82$export$336fa20bf6611150);
$parcel$export(module.exports, "StationMasterTile", () => $86ce5f136d8a0e82$export$98a2051bb5285e38);
$parcel$export(module.exports, "MediumTownTile", () => $86ce5f136d8a0e82$export$76c3cccf7045b32d);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $aiED1 = parcelRequire("aiED1");

var $lmHDp = parcelRequire("lmHDp");

var $hMrfG = parcelRequire("hMrfG");

var $dCnO0 = parcelRequire("dCnO0");

var $uxeiv = parcelRequire("uxeiv");

var $jqhs5 = parcelRequire("jqhs5");

var $dcyLB = parcelRequire("dcyLB");

var $EXbAW = parcelRequire("EXbAW");

var $eHOmi = parcelRequire("eHOmi");

var $iAhJd = parcelRequire("iAhJd");

var $iK0sn = parcelRequire("iK0sn");

var $7qGmp = parcelRequire("7qGmp");

var $elttg = parcelRequire("elttg");

var $ciXjz = parcelRequire("ciXjz");

var $j1nRE = parcelRequire("j1nRE");

var $2XZ0q = parcelRequire("2XZ0q");
function $86ce5f136d8a0e82$export$d90cf5631a50ca69(props) {
    return /*#__PURE__*/ (0, $228IU.jsx)((0, $aiED1.Svg), {
        ...props,
        viewBox: "0 0 72 72",
        children: /*#__PURE__*/ (0, $228IU.jsx)("path", {
            d: "m11 11h25l25 25h-50v25h50",
            fill: "none",
            stroke: $86ce5f136d8a0e82$var$black,
            strokeWidth: ".72"
        })
    });
}
const $86ce5f136d8a0e82$var$bag = true;
const $86ce5f136d8a0e82$var$stationMaster = true;
const $86ce5f136d8a0e82$var$mediumTown = true;
function $86ce5f136d8a0e82$export$336fa20bf6611150({ type: type, kind: kind, hand: hand, ...props }) {
    return /*#__PURE__*/ (0, $228IU.jsx)($86ce5f136d8a0e82$var$Tile, {
        ...props,
        traits: {
            bag: $86ce5f136d8a0e82$var$bag,
            [type]: true,
            kind: kind,
            hand: hand,
            hazzard: (0, $2XZ0q.default)(type, [
                "Flood",
                "Drought",
                "Rockslide"
            ])
        }
    });
}
function $86ce5f136d8a0e82$export$98a2051bb5285e38({ tile: tile, ...props }) {
    return /*#__PURE__*/ (0, $228IU.jsx)($86ce5f136d8a0e82$var$Tile, {
        ...props,
        traits: {
            stationMaster: $86ce5f136d8a0e82$var$stationMaster,
            tile: tile
        }
    });
}
function $86ce5f136d8a0e82$export$76c3cccf7045b32d({ tile: tile, ...props }) {
    return /*#__PURE__*/ (0, $228IU.jsx)($86ce5f136d8a0e82$var$Tile, {
        ...props,
        traits: {
            mediumTown: $86ce5f136d8a0e82$var$mediumTown,
            tile: tile
        }
    });
}
const { white: $86ce5f136d8a0e82$var$white, black: $86ce5f136d8a0e82$var$black, gray_B: $86ce5f136d8a0e82$var$gray_B } = $lmHDp;
const $86ce5f136d8a0e82$var$textFill = $lmHDp.white;
const $86ce5f136d8a0e82$var$textOutline = $lmHDp.black;
const $86ce5f136d8a0e82$var$shieldGradiantStop1 = $lmHDp.selectiveYellow;
const $86ce5f136d8a0e82$var$shieldGradiantStop2 = $lmHDp.blazeOrange;
const $86ce5f136d8a0e82$var$cowboyBackground = $lmHDp.sanMarino;
const $86ce5f136d8a0e82$var$builderBackground = $lmHDp.cannonPink;
const $86ce5f136d8a0e82$var$engineerBackground = $lmHDp.santaFe;
const $86ce5f136d8a0e82$var$handOutline = $lmHDp.white;
const $86ce5f136d8a0e82$var$whiteHandFill = $lmHDp.white;
const $86ce5f136d8a0e82$var$greenHandFill = $lmHDp.tropicalRainForest;
const $86ce5f136d8a0e82$var$blackHandFill = $lmHDp.black;
const $86ce5f136d8a0e82$var$advanceArrowFill = $lmHDp.amazon;
const $86ce5f136d8a0e82$var$takeArrowFill = $lmHDp.plantation;
const $86ce5f136d8a0e82$var$placeArrowFill = $lmHDp.gimblet;
const $86ce5f136d8a0e82$var$shieldOutline = $lmHDp.white;
const $86ce5f136d8a0e82$var$hazzardBackground = $lmHDp.pineCone;
const $86ce5f136d8a0e82$var$hazzardSignBackground = $lmHDp.taupe;
const $86ce5f136d8a0e82$var$hazzardSignOutline = $lmHDp.white;
const $86ce5f136d8a0e82$var$cardBackground = $lmHDp.santasGray;
const $86ce5f136d8a0e82$var$hornBrassFill = $lmHDp.donkeyBrown;
const $86ce5f136d8a0e82$var$hornHandleFill = $lmHDp.woodyBrown;
const $86ce5f136d8a0e82$var$coinFill = $lmHDp.redDamask;
const $86ce5f136d8a0e82$var$coinOutline = $lmHDp.piper;
const $86ce5f136d8a0e82$var$leftPlatformFill = $lmHDp.waikawaGrayEr;
const $86ce5f136d8a0e82$var$rightPlatformFill = $lmHDp.scarpaFlow;
const $86ce5f136d8a0e82$var$stationFill = $lmHDp.silver;
const $86ce5f136d8a0e82$var$stationOutline = $lmHDp.oldLavender;
const $86ce5f136d8a0e82$var$leftStationDiscFill = $lmHDp.white;
const $86ce5f136d8a0e82$var$rightStationDiscFill = $lmHDp.black;
const $86ce5f136d8a0e82$var$buildingFill = $lmHDp.dustyGray;
const $86ce5f136d8a0e82$var$buildingOutline = $lmHDp.boulder;
const $86ce5f136d8a0e82$var$buildingSilhuetteFill = $lmHDp.black;
const $86ce5f136d8a0e82$var$buildingInnerFrameFill = $lmHDp.gray_3;
const $86ce5f136d8a0e82$var$certificateOutline = $lmHDp.white;
const $86ce5f136d8a0e82$var$certificateFill = $lmHDp.victoria;
const $86ce5f136d8a0e82$var$certificateInnerOutline = $lmHDp.eastBay;
const $86ce5f136d8a0e82$var$certificateInnerFill = $lmHDp.victoriaLight;
const $86ce5f136d8a0e82$var$modelDarkSide = $lmHDp.eastBayDark;
const $86ce5f136d8a0e82$var$modelMidSide = $lmHDp.waikawaGray;
const $86ce5f136d8a0e82$var$modelLightSide = $lmHDp.wildBlueYonder;
const $86ce5f136d8a0e82$var$mediumTownIconFill = $lmHDp.chambray;
const $86ce5f136d8a0e82$var$mediumTownIconInner = $lmHDp.white;
const $86ce5f136d8a0e82$var$mediumTownFrameFill = $lmHDp.stTropaz;
const $86ce5f136d8a0e82$var$trashCardFill = $lmHDp.astronaut;
const $86ce5f136d8a0e82$var$trashCrossFill = $lmHDp.sangria;
const $86ce5f136d8a0e82$var$costReductionFill = $lmHDp.paradiso;
const $86ce5f136d8a0e82$var$stationMasterFrameTopFill = $lmHDp.stTropaz;
const $86ce5f136d8a0e82$var$stationMasterFrameBottomFill = $lmHDp.revolver;
const $86ce5f136d8a0e82$var$banditGreenFill = $lmHDp.deepSea;
const $86ce5f136d8a0e82$var$banditOrangeFill = $lmHDp.burntOrange;
const $86ce5f136d8a0e82$var$floodFill = $lmHDp.curiousBlue;
const $86ce5f136d8a0e82$var$rockSlideFill = $lmHDp.scorpion;
const $86ce5f136d8a0e82$var$droughtFill = $lmHDp.sunFlower;
// Todo: where is fillrule required?
function $86ce5f136d8a0e82$var$SansColonDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "sans-colon",
        d: "m1.1 2.2537a0.55002 0.55002 0 0 1-0.55002 0.55002 0.55002 0.55002 0 0 1-0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002 0.55002zm0-1.7036a0.55002 0.55002 0 0 1-0.55002 0.55002 0.55002 0.55002 0 0 1-0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002 0.55002z",
        fill: $86ce5f136d8a0e82$var$textFill,
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: ".065003",
        style: {
            paintOrder: "stroke"
        }
    });
}
function $86ce5f136d8a0e82$var$SansOneDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "sans-one",
        d: "m1.3262 0.0325h0.72376v5.6555h-0.89297v-3.9688c-0.31931 0.38758-0.67318 0.61935-1.1245 0.82682v-1.0914c0.658-0.3799 1.2937-1.1204 1.2937-1.4221z",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".065"
    });
}
function $86ce5f136d8a0e82$var$SansTwoDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "sans-two",
        d: "m0.079272 1.8278c0-0.65203 0.43341-1.7953 1.6439-1.7953 1.2105 0 1.4225 1.1688 1.4225 1.8201s-0.45728 1.2646-0.81734 1.6838-0.96568 1.0729-0.96568 1.0729h1.783v1.0421h-3.1132c0-0.64783 0.28859-1.1905 0.52276-1.5705 0.23418-0.38008 0.49877-0.71467 0.91441-1.1303 0.41564-0.41564 0.74016-0.97513 0.74016-1.2976 0-0.32245-0.12866-0.70595-0.48668-0.70843-0.35802-0.0025-0.70843 0.53597-0.70843 0.88324z",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".065"
    });
}
function $86ce5f136d8a0e82$var$SansInfDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "sans-inf",
        d: "m3.6006 0.70656c0.27379 0 0.49609 0.21274 0.49609 0.47969 0 0.26695-0.2223 0.48334-0.49609 0.48334s-0.70948-0.48334-0.70948-0.48334 0.43568-0.4797 0.70948-0.47969zm-2.4143 0.9595c-0.27379 0-0.49609-0.21285-0.49609-0.4798 0-0.26695 0.22879-0.48691 0.49609-0.48691s0.70947 0.48691 0.70947 0.48691-0.43568 0.4798-0.70947 0.4798zm2.4143 0.66121c0.59572 1e-6 1.141-0.51085 1.141-1.141 0-0.63017-0.5453-1.141-1.141-1.141-0.59572 0-1.2077 0.64847-1.2077 0.64847s-0.60509-0.64847-1.2067-0.64847-1.141 0.51085-1.141 1.141c0 0.63016 0.53945 1.141 1.141 1.141 0.60156 0 1.2085-0.65024 1.2085-0.65024s0.61014 0.65024 1.2059 0.65024z",
        fill: $86ce5f136d8a0e82$var$textFill,
        fillRule: "evenodd",
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeLinecap: "round",
        strokeWidth: ".090473"
    });
}
function $86ce5f136d8a0e82$var$SansXDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "sans-x",
        d: "m1.4986 2.996 0.50117 1.0267 0.94503 6.62e-4 -0.97376-1.9952 0.97413-1.9956h-0.94503l-0.50157 1.0275-0.50147-1.0275h-0.94503l0.97402 1.9955-0.97304 1.9934 0.94404 2e-3z",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".065"
    });
}
function $86ce5f136d8a0e82$var$SerifTwoBaseDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "serif-two-base",
        d: "m1.278 0c0.82 0 1.1417 0.56492 1.1417 1.1502s-0.43508 0.93038-0.76147 1.2562c-0.32639 0.32586-0.9874 0.65398-0.9874 0.65398h1.8729v0.83222h-2.5437c0-0.40978 0.1084-0.88723 0.52217-1.2831s0.63979-0.49137 0.84224-0.82345c0.20246-0.33208 0.29761-0.73273 0.07725-1.0167-0.22035-0.28398-0.5778-0.34962-0.5778-0.34962 0.18219 0.30342 0.14013 0.7088-0.17197 0.95682 0 0-0.58304-0.15647-0.51993-0.60543 0.06311-0.44896 0.286-0.77117 1.106-0.77117z"
    });
}
function $86ce5f136d8a0e82$var$SerifThreeBaseDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "serif-three-base",
        d: "m2.279 0.98073c0.01891 0.52144-0.41965 0.89043-0.74605 0.89043 0.33115 0 0.90017 0.1328 0.90017 0.93283 0 0.80003-0.5816 1.09-1.3869 1.09-0.80525 0-1.0463-0.46874-1.0463-0.74261 0-0.27387 0.12699-0.45519 0.38711-0.45519 0.26011 0 0.38711 0.18559 0.38711 0.45519 0 0.2696-0.11433 0.37451-0.11433 0.37451 0.1591 0.1591 0.8857 0.1659 0.88449-0.67318-9.55e-4 -0.83908-0.51882-0.84163-0.65969-0.84163v-0.27994c0.14749 0 0.56939-0.09458 0.56804-0.7219-9.56e-4 -0.62732-0.65513-0.56965-0.65513-0.56965s0.07919 0.26751 0.07919 0.43261c0 0.1651-0.14793 0.45675-0.3536 0.45675s-0.38201-0.15954-0.38201-0.45675c0-0.29721 0.24663-0.87225 1.0113-0.87225 0.76465 0 1.1077 0.45929 1.1266 0.98073z"
    });
}
function $86ce5f136d8a0e82$var$SerifFiveBaseDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "serif-five-base",
        d: "m0.45122 0h1.8841v0.82943l-1.7196 0.01138-0.12524 0.71728s0.32537-0.21022 0.89-0.21022c0.56463 0 1.1071 0.40548 1.1071 1.1778 0 0.77237-0.72142 1.3685-1.441 1.3685-0.7196 0-1.0465-0.54313-1.0465-0.88315s0.15242-0.48416 0.36022-0.48416 0.39056 0.14537 0.39056 0.47278-0.10618 0.42967-0.10618 0.42967c0.48936 0 0.65894-0.10476 0.79922-0.34774 0.14028-0.24297 0.09123-0.77249-0.01877-0.96301-0.11-0.19052-0.26776-0.34286-0.57191-0.34286s-0.6653 0.19782-0.6653 0.19782z"
    });
}
function $86ce5f136d8a0e82$var$SerifOneWhiteDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "serif-one-white",
        d: "m0.24536 0.4266c0.43093-0.01601 0.90579-0.22414 0.90579-0.4151h0.47398v3.1295c0 0.28319 0.24334 0.4369 0.52618 0.4369v0.21632h-2.1398v-0.21632c0.37862 0 0.74836-0.15894 0.74836-0.4369v-2.3987h-0.51449z",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".023"
    });
}
const $86ce5f136d8a0e82$var$SerifTwoWhiteDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SerifTwoBaseDef, function SerifTwoWhiteDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        id: "serif-two-white",
        transform: "translate(.011 .011)",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".022",
        xlinkHref: "#serif-two-base"
    });
});
const $86ce5f136d8a0e82$var$SerifThreeWhiteDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SerifThreeBaseDef, function SerifThreeWhiteDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        id: "serif-three-white",
        transform: "translate(.011 .011)",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".022",
        xlinkHref: "#serif-three-base"
    });
});
const $86ce5f136d8a0e82$var$SerifFiveWhiteDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SerifFiveBaseDef, function SerifFiveWhiteDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        id: "serif-five-white",
        transform: "translate(.011 .011)",
        fill: $86ce5f136d8a0e82$var$textFill,
        stroke: $86ce5f136d8a0e82$var$textOutline,
        strokeWidth: ".022",
        xlinkHref: "#serif-five-base"
    });
});
function $86ce5f136d8a0e82$var$BagTileFrameDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("rect", {
        id: "bag-tile-frame",
        x: ".403",
        y: ".403",
        width: "21.194",
        height: "25.194",
        ry: "3",
        fill: $86ce5f136d8a0e82$var$gray_B,
        fillRule: "evenodd",
        stroke: $86ce5f136d8a0e82$var$black,
        strokeWidth: ".806"
    });
}
function $86ce5f136d8a0e82$var$LassoDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "lasso",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m6.536 17.41c-2.1194-3.3094-2.7692-5.6962 0.050243-9.8593m1.0846-1.5069c2.5571-3.4311 3.1939-3.4839 4.5679-4.7915",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeLinecap: "round",
                strokeWidth: "1.1781"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m7.7108 6.0313c1.7172 0.026711 4.559 1.177 6.6532 1.3465 2.0942 0.1695 3.5021-1.6246 2.2441-3.4718-1.258-1.8472-5.2662-3.2606-8.1185-3.3134-2.8522-0.052825-4.9629 0.47759-6.4816 1.6105-1.5187 1.1329-1.6545 3.0243-1.1221 3.6038 0.53242 0.5795 1.8313 0.61441 2.9834 0.48843 1.152-0.12598 2.1242-0.29072 3.8414-0.26402z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeWidth: "1.1781"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: "12.1",
                cy: "1.3583",
                r: "1.2648"
            })
        ]
    });
}
function $86ce5f136d8a0e82$var$HammerDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "hammer",
        d: "m3.0299 1.832c-0.28987 0-2.7146 0.82976-3.0299 0.82903v-0.66526s2.5385-1.995 3.0299-1.995c0.28914 6.97e-4 2.4588 0.01087 3.998 0.01087 0 0 0.38625 0.74352 0.89353 0.74352 0.50872 0 0.88773-0.75511 0.88773-0.75511 0.54134 6.97e-4 0.88266 0 0.88266 0 0.38263 0.0015 0.54133 0.43094 0.54133 0.89908v0.89908c-0.0014 0.46959-0.16015 0.89908-0.54133 0.89908l-0.88266 0.0072s-0.34205-0.73482-0.88773-0.70511c-0.76096 0.11995-1.2979 0.94473-1.2979 1.5537v13.712c7.21e-4 0.77178-0.51238 0.7341-1.1436 0.73482-0.63192 0-1.1428 0.0355-1.1435-0.73482 0 0-0.0044-11.065 0-13.712 0-0.57722-0.70303-1.6577-1.3066-1.7211z"
    });
}
function $86ce5f136d8a0e82$var$WrenchDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "wrench",
        d: "m2.5725 4.1863 2.1125 0.0532 1.6839-2.0639c0.29425 0.68678 0.49978 2.2917-0.72283 3.3141-0.31824 0.34245-1.3496 1.0353-1.6421 1.6318-0.37902 0.79784-0.33476 0.86871-0.34897 2.8382v7.3049c0 0.77987-0.5298 0.73481-1.1638 0.73481-0.63396 5e-6 -1.1233 0.02459-1.1233-0.73481v-9.7287c0.0052-0.79202-0.32634-1.7826-0.80902-2.4289-0.78091-1.1615-0.76089-2.7572 0.17143-3.9 0.75156-0.92118 2.0014-1.3581 3.0055-1.1604l-1.6649 2.0406z"
    });
}
const $86ce5f136d8a0e82$var$CowboyDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$LassoDef, function CowboyDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "cowboy",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "22",
                height: "26",
                ry: "3.096",
                fill: $86ce5f136d8a0e82$var$cowboyBackground,
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.1698 4.0004)",
                xlinkHref: "#lasso"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$BuilderDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$HammerDef, function BuilderDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "builder",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "22",
                height: "26",
                ry: "3.096",
                fill: $86ce5f136d8a0e82$var$builderBackground,
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(5.8835 4.0002)",
                xlinkHref: "#hammer"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$EngineerDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$WrenchDef, function EngineerDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "engineer",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "22",
                height: "26",
                ry: "3.096",
                fill: $86ce5f136d8a0e82$var$engineerBackground,
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.7033 4.0001)",
                xlinkHref: "#wrench"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$RevolverBaseDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "revolver-base",
        d: "m1.7311 2.3055-0.458-0.458c-0.03421-0.034189-0.08963-0.034189-0.12382 0l-0.53642 0.53642c-0.03325 0.037025-0.03144 0.091376 0 0.12378l0.458 0.458c0.03708 0.033615 0.09193 0.030919 0.12383 0l0.53642-0.53642c0.03325-0.037025 0.03144-0.091386-1.1e-5 -0.12379zm-0.66024 0.41258-0.2104-0.2104c-0.03066-0.030667-0.03064-0.093143 0-0.12379l0.29812-0.29811c0.03052-0.030516 0.07457-0.030629 0.1052 0 0.03058 0.030587 0.0305 0.074701-1e-6 0.1052l-0.23994 0.23993c-0.03419 0.034189-0.03419 0.089606 0 0.1238 0.03708 0.033615 0.09193 0.03092 0.12383 0l0.23993-0.23993c0.02995-0.029945 0.07437-0.030833 0.1052 0 0.03049 0.030493 0.03059 0.07461 0 0.1052l-0.29812 0.29811c-0.03074 0.030742-0.09315 0.030674-0.12383 0zm2.1385-2.3232c0-0.023217-0.0092-0.045485-0.02563-0.061893l-0.30739-0.30739c-0.0342-0.034189-0.08962-0.034189-0.12381 0l-0.11576 0.11576-0.04617-0.046172c-0.0342-0.034189-0.08962-0.034189-0.12381 0-0.03419 0.034189-0.03419 0.089617 0 0.12381l0.04617 0.046172-1.2008 1.2008c-0.01606-0.014503-0.03689-0.022654-0.0586-0.022654-0.02322 0-0.04547 0.00922-0.06191 0.025641l-0.96484 0.96484c-0.01641 0.016409-0.02563 0.038687-0.02563 0.061893s0.0092 0.045485 0.02563 0.061893c0.03308 0.033075 0.06099 0.069919 0.0836 0.10945-0.11932 0.028465-0.22518 0.10047-0.29547 0.20456-0.02705 0.040072-0.0165 0.094489 0.02357 0.12155 0.01502 0.010142 0.03206 0.015005 0.04891 0.015005 0.02811 0 0.05571-0.013506 0.07264-0.038551 0.04919-0.072845 0.1253-0.1214 0.21024-0.13625 0.0051 0.029285 0.0078 0.059175 0.0078 0.089512 0 0.13798-0.05374 0.26769-0.10435 0.31842-0.05061 0.050727-0.09211 0.096503-0.13798 0.12403-0.04056 0.024319-0.05445 0.076468-0.03139 0.11775 0.03399 0.060872 0.01448 0.17333-0.0027 0.27255-0.01013 0.058416-0.01971 0.1136-0.0201 0.16358-0.0032 0.41338 0.19492 0.77543 0.73123 1.3359 0.04579 0.047848 0.10743 0.074583 0.17437 0.074958 0.06694 3.621e-4 0.1279-0.024864 0.17391-0.070856l0.51936-0.51937c0.04181-0.041821 0.06322-0.099622 0.05871-0.15858-0.0045-0.059081-0.03452-0.11309-0.08235-0.14818-0.2945-0.21609-0.57956-0.51243-0.49764-0.69684 0.01889-0.03799 0.10141-0.090918 0.1718-0.1258 0.05228 0.031867 0.11264 0.049805 0.19324 0.050289 0.0806 4.531e-4 0.17137-0.038223 0.23639-0.10617l0.16104-0.1683c0.16081-0.16807 0.16371-0.43409 0.0066-0.60564-0.0087-0.00946-0.04444-0.063839-0.04444-0.084848 0-0.029107 0.01134-0.05649 0.03192-0.077082l0.21275-0.21275c0.03419-0.034189 0.03419-0.089606 0-0.1238l-0.26122-0.26124 0.84038-0.84041c0.03419-0.034189 0.03419-0.089606 0-0.1238-0.0342-0.034189-0.08962-0.034189-0.10671-0.017093l0.58275-0.58271c0.01642-0.016417 0.02563-0.038687 0.02563-0.061903zm-1.4141 2.8702-0.16104 0.1683c-0.03316 0.03465-0.07822 0.053408-0.12573 0.052606-0.04794-7.174e-4 -0.09202-0.020729-0.12411-0.056343-0.04381-0.048629-0.06452-0.10981-0.0626-0.17028 0.04594 0.019928 0.09545 0.030285 0.14547 0.030285 0.04641 0 0.09324-0.00884 0.13802-0.027004 0.0448-0.018188 0.06638-0.069243 0.04819-0.11404-0.01818-0.044788-0.0692-0.06638-0.11404-0.048192-0.04892 0.019845-0.1025 0.018346-0.14895-0.00208l0.21108-0.20543c0.02598-0.025218 0.05988-0.038947 0.09876-0.038369 0.03888 5.664e-4 0.07354 0.016455 0.09892 0.044178 0.09507 0.10377 0.09331 0.26469-4e-3 0.36635z",
        fillRule: "evenodd",
        style: {
            paintOrder: "stroke"
        }
    });
}
function $86ce5f136d8a0e82$var$HandBaseDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "hand-base",
        d: "m0.85913 0.22666c0.03662-0.06438 0.09033-0.08467 0.1396-0.08503 0.04927-3.64e-4 0.12077 0.06077 0.14164 0.14048 0.02088 0.07971 0.01938 0.21505 0.01333 0.36577-0.0061 0.15072-0.0028 0.15258-0.01226 0.35973 0.02818 0.21688 0.02748 0.25545 0.08888 0.45279 0.04636-0.12348 0.04467-0.16839 0.04778-0.19073 0.0031-0.02234 0.01739-0.11313 0.05988-0.17726 0.0425-0.06413 0.09918-0.08525 0.18352-0.06531s0.11519 0.0493 0.13491 0.12083c0.01674 0.06074-0.01056 0.22697-0.02426 0.30867-0.04124 0.13457-0.02543 0.03477-0.14023 0.44985-0.06938 0.11902-0.17674 0.30364-0.30894 0.40354-0.1322 0.0999-0.25593 0.13006-0.46593 0.07077-0.11905 0.02256-0.32203 0.04884-0.43-0.0737-0.10796-0.12254-0.17094-0.264-0.19972-0.47917-0.02879-0.21517-0.0225-0.46983-0.01464-0.56127 0.0018-0.09528-0.0795-0.47321-0.07224-0.60224 0.0073-0.12903 0.0656-0.16526 0.11265-0.18266 0.04706-0.01739 0.12114-1.25e-4 0.16394 0.06724l0.04761 0.48127c-0.0085-0.06993-0.03583-0.32463-0.04754-0.48128-0.0117-0.15665-0.01452-0.23869-0.0067-0.26984 0.01914-0.07622 0.04977-0.11772 0.12865-0.1267 0.07888-9e-3 0.13415 0.04095 0.1735 0.11846l0.0086 0.67424s-0.01017-0.57925-0.0086-0.67424c0.0015-0.09499-0.01007-0.14551 0.01088-0.18815 0.02094-0.04264 0.06885-0.08271 0.13673-0.08273 0.06788-1.6997e-5 0.12176 0.06298 0.13162 0.09935 0.0099 0.03637 0.0066 0.065 0.0074 0.1273 8.9e-4 0.0623-0.01705 0.71788-0.01705 0.71788z"
    });
}
const $86ce5f136d8a0e82$var$HandDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$HandBaseDef, function HandDef({ hand: hand }) {
    const [id, fill] = hand === "Green" ? [
        "hand-green",
        $86ce5f136d8a0e82$var$greenHandFill
    ] : hand === "Black" ? [
        "hand-black",
        $86ce5f136d8a0e82$var$blackHandFill
    ] : hand === "White" ? [
        "hand-white",
        $86ce5f136d8a0e82$var$whiteHandFill
    ] : [
        "",
        ""
    ];
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        id: id,
        transform: "translate(.041563 .0415)",
        xlinkHref: "#hand-base",
        fill: fill,
        stroke: $86ce5f136d8a0e82$var$handOutline,
        strokeLinejoin: "round",
        strokeWidth: ".083"
    });
});
function $86ce5f136d8a0e82$var$AdvanceArrowDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "advance-arrow",
        d: "m0.1325 1.8137v-1.6812l2.256 1.543 2.256-1.543v1.6812l-2.256 1.5553z",
        fill: $86ce5f136d8a0e82$var$advanceArrowFill,
        stroke: $86ce5f136d8a0e82$var$white,
        strokeLinejoin: "round",
        strokeWidth: ".265"
    });
}
function $86ce5f136d8a0e82$var$TakeArrowDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "take-arrow",
        d: "m0.031671 2.7571c0.22573-0.98016 0.6782-1.8001 1.7417-2.1597l-0.03949-0.54235 1.4606 0.7405-1.3212 1.1747-0.05311-0.72932c-0.9868 0.30595-1.298 0.94751-1.7885 1.5162z",
        fill: $86ce5f136d8a0e82$var$takeArrowFill,
        stroke: $86ce5f136d8a0e82$var$black,
        strokeWidth: ".065"
    });
}
function $86ce5f136d8a0e82$var$PlaceArrowDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "place-arrow",
        d: "m0.0067851 0.032328c0.81401 0.08404 1.6389-0.3145 2.3805 1.0142l0.3089-0.16062-0.04678 1.4149-1.1711-0.78155 0.39173-0.2037c-0.23998-0.67185-0.90628-1.0789-1.8632-1.2832z",
        fill: $86ce5f136d8a0e82$var$placeArrowFill,
        stroke: $86ce5f136d8a0e82$var$black,
        strokeWidth: ".065"
    });
}
function $86ce5f136d8a0e82$var$ShieldDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsxs)("linearGradient", {
                id: "shield-gradient",
                x1: "113.88",
                x2: "168.43",
                y1: "196.63",
                y2: "196.62",
                gradientTransform: "matrix(.11349 0 0 .11349 -12.924 -18.574)",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0, $228IU.jsx)("stop", {
                        stopColor: $86ce5f136d8a0e82$var$shieldGradiantStop1,
                        offset: "0"
                    }),
                    /*#__PURE__*/ (0, $228IU.jsx)("stop", {
                        stopColor: $86ce5f136d8a0e82$var$shieldGradiantStop2,
                        offset: "1"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                id: "shield",
                d: "m1.2413 0.79082c-0.59806 0.30988-1.0634 0.61956-1.0634 0.61956l0.12953 1.5333 0.12953 1.5333c0.04684 0.53152 0.46947 1.1231 1.002 1.6384 0.53254 0.51531 1.175 0.95436 1.6616 1.1809 0.48658-0.22645 1.1291-0.66544 1.6617-1.1807 0.53259-0.51525 0.95527-1.1068 1.0022-1.6383l0.12968-1.5333 0.12968-1.5333s-0.46535-0.30972-1.0634-0.61966c-0.59804-0.30994-1.3288-0.62098-1.8595-0.621-0.53073-2.66e-5 -1.2615 0.31094-1.8595 0.62082z",
                fill: "url(#shield-gradient)",
                stroke: $86ce5f136d8a0e82$var$shieldOutline,
                strokeWidth: ".34"
            })
        ]
    });
}
// Todo: 3 has an extra vector node at the top left
const $86ce5f136d8a0e82$var$ShieldVpDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$ShieldDef, function ShieldVpDef({ value: value }) {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: `vp-${value}`,
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                xlinkHref: "#shield"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: {
                    "0": "m3.1745 2.0931c0.46034 0.020085 0.60946 0.78851 0.58938 1.2489-0.02009 0.46034-0.23694 1.2153-0.69728 1.1952-0.46034-0.020085-0.60946-0.78851-0.58938-1.2489 0.02009-0.46034 0.23694-1.2153 0.69728-1.1952zm0.0092-0.43093c0.53385 0.030068 1.0228 0.35564 1.2424 0.84172 0.21961 0.48608 0.15104 1.4124-0.11988 1.8386-0.27091 0.42617-0.7466 0.58956-1.2143 0.58924-0.46767-3.172e-4 -0.94309-0.19531-1.2195-0.64126-0.27644-0.44595-0.31971-1.3456-0.05397-1.8423 0.26574-0.4967 0.83142-0.81605 1.3653-0.78598z",
                    "1": "m2.2924 1.7068 1.2116 9.044e-4 -0.0021 2.7729 0.40343 3.012e-4 -3.02e-4 0.4043-1.5253-0.00114 3.02e-4 -0.4043 0.30722 2.293e-4 0.0017-2.3216-0.39689-2.963e-4z",
                    "2": "m1.793 2.4057c0.22852-0.47113 0.66047-0.75128 1.3278-0.74518 0.66732 0.00613 1.2918 0.37189 1.3018 1.0769 0.01 0.70503-0.56535 0.88607-0.88342 1.0096-0.31806 0.12356-0.48149 0.13204-0.68646 0.30716-0.20498 0.17511-0.23183 0.21946-0.23511 0.45865l1.7741 0.00132-3.12e-4 0.41753-2.3046-0.00172c-0.22962 0.013623-0.34913-0.16385-0.29513-0.35614 0.05234-0.18636 0.19239-0.78745 0.95972-1.1005 0.76732-0.31309 0.76426-0.40677 0.85524-0.62522 0.09098-0.21845 0.0021-0.67594-0.45334-0.75232-0.45545-0.076385-0.80868 0.64061-0.80868 0.64061z",
                    "3": "m2.1291 1.8117c0.19086-0.13624 0.64149-0.20853 1.0901-0.1802 0.44862 0.028323 0.82788 0.12671 0.98591 0.50721 0.15803 0.3805 0.0015 0.63224-0.06263 0.71611-0.06412 0.083878-0.33315 0.20814-0.33315 0.20814 0.19888 0.093902 0.45143 0.19186 0.56787 0.38586 0.11643 0.19401 0.17724 0.33695 0.15714 0.69698-0.02009 0.36003-0.2541 0.55327-0.50054 0.65114-0.24644 0.097877-0.64251 0.18818-0.98062 0.16614-0.33811-0.022041-0.50494-0.015827-0.91617-0.2235-0.41122-0.20767-0.4008-0.38491-0.47435-0.56518l0.6733-0.27286c0.04792 0.17802 0.12025 0.47165 0.40983 0.61928 0.28958 0.14764 0.62006 0.01128 0.73541-0.09664 0.11535-0.10792 0.2439-0.28098 0.24934-0.50867 0.0055-0.22769-0.17229-0.42203-0.3559-0.51655-0.18361-0.094518-0.39707-0.11961-0.70362-0.081701l-0.03822-0.37298s0.37741-0.011506 0.59037-0.05725c0.21296-0.045736 0.38148-0.11489 0.37715-0.44019-0.0043-0.3253-0.28053-0.40593-0.4104-0.42188-0.12988-0.015947-0.24675 0.0012-0.36838 0.026596-0.12163 0.025377-0.15131 0.063908-0.16608 0.12405-0.01477 0.060143 0.0722 0.12941 0.05934 0.16476-0.01287 0.035345-0.09357 0.072924-0.25009 0.062545-0.15652-0.010379-0.21338-0.20258-0.33555-0.24026-0.12217-0.037681-0.24287-0.1899-7.9e-5 -0.35097 0.24281-0.16108 2e-6 1.06e-5 2e-6 1.06e-5z",
                    "4": "m2.4874 2.1526 0.5177 3.864e-4 -0.58043 1.5951 0.90438 6.751e-4 0.00152-2.0412 0.74676 5.574e-4 -0.00152 2.0412 0.20156 1.504e-4 -3.659e-4 0.4903-0.20156-0.00496-4.855e-4 0.65043-0.74676-5.574e-4 5.04e-4 -0.67522-1.4865-0.062316c-0.1588-0.028012-0.20872-0.16662-0.10198-0.39549z"
                }[value] || "",
                fill: $86ce5f136d8a0e82$var$textFill,
                fillRule: "evenodd",
                stroke: $86ce5f136d8a0e82$var$textOutline,
                strokeWidth: ".023"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$ShieldHazzard = $86ce5f136d8a0e82$var$dependencies([
    $86ce5f136d8a0e82$var$ShieldVpDef,
    [
        "value"
    ]
], function ShieldHazzard({ value: value }) {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        transform: "matrix(1.2093 0 0 1.2093 12.389 14.751)",
        xlinkHref: `#vp-${value}`
    });
});
const $86ce5f136d8a0e82$var$WorkerDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BagTileFrameDef, $86ce5f136d8a0e82$var$LassoDef, $86ce5f136d8a0e82$var$HammerDef, $86ce5f136d8a0e82$var$WrenchDef, function WorkerDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "worker",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "scale(.27335)",
                xlinkHref: "#bag-tile-frame"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.19612 0 0 .19612 2.1016 .60395)",
                xlinkHref: "#lasso"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.19611 0 0 .19611 .50503 2.5313)",
                xlinkHref: "#hammer"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.19611 0 0 .19611 3.745 2.973)",
                xlinkHref: "#wrench"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$HazzardDef = $86ce5f136d8a0e82$var$dependencies([
    $86ce5f136d8a0e82$var$HandDef,
    {
        hand: "White"
    }
], function HazzardDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "hazzard",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "5.8796",
                height: "7.1068",
                ry: ".8",
                fill: $86ce5f136d8a0e82$var$hazzardBackground,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.2707 5.1054-0.19922 0.023438 0.24845 1.9779h0.20046z",
                fill: $86ce5f136d8a0e82$var$hazzardSignBackground
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                transform: "rotate(-7.1401)",
                x: ".95441",
                y: "1.7542",
                width: "3.1116",
                height: "3.7172",
                ry: ".15",
                fill: $86ce5f136d8a0e82$var$hazzardSignBackground,
                stroke: $86ce5f136d8a0e82$var$hazzardSignOutline,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".365",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "rotate(-11.47 11.933 -8.2639)",
                xlinkHref: "#hand-white"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$HazzardTakeDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$HazzardDef, $86ce5f136d8a0e82$var$TakeArrowDef, function HazzardTakeDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "hazzard-take",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(0 1.111)",
                xlinkHref: "#hazzard"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(4.8306)",
                xlinkHref: "#take-arrow"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$ObjectiveDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "objective",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: ".031505",
                y: ".031505",
                width: "4.562",
                height: "7.039",
                ry: ".40002",
                fill: $86ce5f136d8a0e82$var$cardBackground,
                stroke: $86ce5f136d8a0e82$var$black,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".06301",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.0595 3.2701 0.80974 0.1057-0.035076 0.26871-0.35411-0.05725",
                fill: $86ce5f136d8a0e82$var$hornBrassFill,
                stroke: $86ce5f136d8a0e82$var$black,
                strokeWidth: ".067054",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m1.9808 3.3449c-0.48716-0.07296-0.55536 0.11946-0.5773 0.25517s0.076937 0.39095 0.33356 0.43244l1.1686 0.18894c0.31055 0.05021 0.52281-0.0821 0.57389-0.39806 0.051084-0.31596-0.1097-0.51273-0.42008-0.55325l-1.2051-0.15731c-0.36442-0.047571-0.67507-0.4154-0.88634-0.64205l-0.2046 1.2085c0.2652-0.1616 0.69497-0.41883 1.0882-0.35526l1.1686 0.18894c0.15754 0.02547 0.17111 0.17276 0.15806 0.26851-0.013054 0.09574-0.076769 0.22097-0.23311 0.19569l-1.0394-0.16805c-0.12923-0.02089-0.21875-0.11107-0.19486-0.25878 0.023882-0.1477 0.14044-0.22481 0.26992-0.20542",
                fill: $86ce5f136d8a0e82$var$hornBrassFill,
                stroke: $86ce5f136d8a0e82$var$black,
                strokeWidth: ".067054",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m2.9452 3.9771-0.039498 0.24429-1.0394-0.16805 0.039498-0.24429z",
                fill: $86ce5f136d8a0e82$var$hornHandleFill
            })
        ]
    });
}
function $86ce5f136d8a0e82$var$CattleDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "cattle",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: ".031501",
                y: ".031504",
                width: "4.5621",
                height: "7.0386",
                ry: ".4",
                fill: $86ce5f136d8a0e82$var$cardBackground,
                stroke: $86ce5f136d8a0e82$var$black,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: ".063009",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m0.33642 1.5956v3.999s1.1289-0.6665 1.9761-0.6665c0.84718-1e-6 1.9761 0.6665 1.9761 0.6665v-3.999s-1.1256 0.44434-1.9761 0.44434c-0.85055-1e-6 -1.9761-0.44434-1.9761-0.44434z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeWidth: ".065"
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$Cattle3to5Def = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CattleDef, $86ce5f136d8a0e82$var$SerifThreeBaseDef, $86ce5f136d8a0e82$var$SerifFiveBaseDef, function Cattle3to5Def() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "cattle-3-5",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                xlinkHref: "#cattle"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.57652 0 0 .57652 .589 2.3333)",
                fill: $86ce5f136d8a0e82$var$black,
                xlinkHref: "#serif-three-base"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: "2.1169",
                y: "3.4202",
                width: ".53131",
                height: ".23331"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.5765 0 0 .5765 2.6506 2.355)",
                fill: $86ce5f136d8a0e82$var$black,
                xlinkHref: "#serif-five-base"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$CattleTake3Def = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CattleDef, $86ce5f136d8a0e82$var$SerifThreeBaseDef, $86ce5f136d8a0e82$var$TakeArrowDef, function CattleTake3Def() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "cattle-take-3",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(1.0001 0 0 1.0001 4.0635e-6 8.624e-8)",
                xlinkHref: "#cattle"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.57652 0 0 .57652 1.6113 2.3335)",
                fill: $86ce5f136d8a0e82$var$black,
                xlinkHref: "#serif-three-base"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.96395 0 0 .96395 3.7361 .40133)",
                xlinkHref: "#take-arrow"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$CoinDef() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        id: "coin",
        d: "m7.0533 4.2996a2.7533 2.7533 0 0 1-2.7533 2.7533 2.7533 2.7533 0 0 1-2.7533-2.7533 2.7533 2.7533 0 0 1 2.7533-2.7533 2.7533 2.7533 0 0 1 2.7533 2.7533zm1.3967 0a4.15 4.1496 0 0 1-4.15 4.1496 4.15 4.1496 0 0 1-4.15-4.1496 4.15 4.1496 0 0 1 4.15-4.1496 4.15 4.1496 0 0 1 4.15 4.1496z",
        fill: $86ce5f136d8a0e82$var$coinFill,
        stroke: $86ce5f136d8a0e82$var$coinOutline,
        strokeLinecap: "round",
        strokeWidth: ".3"
    });
}
function $86ce5f136d8a0e82$var$StationDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "station",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: "1.0544",
                y: "0",
                width: "1.5915",
                height: "1.076",
                fill: $86ce5f136d8a0e82$var$leftPlatformFill,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: "2.6478",
                y: "0",
                width: "1.5915",
                height: "1.076",
                fill: $86ce5f136d8a0e82$var$rightPlatformFill,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: ".14562",
                y: "1.0735",
                width: "5.0048",
                height: "5.0048",
                fill: $86ce5f136d8a0e82$var$stationFill,
                stroke: $86ce5f136d8a0e82$var$stationOutline,
                strokeLinejoin: "round",
                strokeWidth: ".29124",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m1.5844 5.7239c-0.47014-0.23274-0.85098-0.61322-1.0842-1.0831v1.0831zm-1.0842-3.2127c0.23319-0.46992 0.61403-0.8504 1.0842-1.0831h-1.0842z",
                fill: $86ce5f136d8a0e82$var$leftStationDiscFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m2.6478 1.076v5.0023",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeWidth: ".065"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.714 1.428c0.4692 0.23284 0.84926 0.6129 1.0821 1.0821v-1.0821zm1.0821 3.2117c-0.23301 0.4703-0.61387 0.85117-1.0842 1.0842h1.0842z",
                fill: $86ce5f136d8a0e82$var$rightStationDiscFill
            })
        ]
    });
}
function $86ce5f136d8a0e82$var$BuildingDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "building",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: ".385",
                y: ".385",
                width: "5.9379",
                height: "5.9379",
                fill: $86ce5f136d8a0e82$var$buildingFill,
                stroke: $86ce5f136d8a0e82$var$buildingOutline,
                strokeLinejoin: "round",
                strokeWidth: ".77",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m5.3797 5.3631v-0.12816l-0.14469-0.12816v-2.4309l0.38447-0.39688-2.3027-1.1576-2.3027 1.1576 0.38447 0.39688v2.4309l-0.14469 0.12816v0.12816zm-1.3643-2.2655v2.0092h0.85163v-2.497h-3.1006v2.497h0.85163v-2.0092z",
                fill: $86ce5f136d8a0e82$var$buildingSilhuetteFill,
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m0.94429 0.385c0 0.30873-0.25027 0.559-0.559 0.559v-0.559z",
                fill: $86ce5f136d8a0e82$var$buildingOutline
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: ".38529",
                cy: ".385",
                r: ".19792",
                fill: $86ce5f136d8a0e82$var$buildingInnerFrameFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m5.7639 0.385 0.559-2e-6v0.559c-0.30873 0-0.559-0.25027-0.559-0.559z",
                fill: $86ce5f136d8a0e82$var$buildingOutline
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: "6.3229",
                cy: ".385",
                r: ".19792",
                fill: $86ce5f136d8a0e82$var$buildingInnerFrameFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m6.3229 5.7639c-0.30873 0-0.559 0.25027-0.559 0.559h0.559z",
                fill: $86ce5f136d8a0e82$var$buildingOutline
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: "6.3229",
                cy: "6.3229",
                r: ".19792",
                fill: $86ce5f136d8a0e82$var$buildingInnerFrameFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m0.38529 5.7639c0.30873 0 0.559 0.25027 0.559 0.559h-0.559z",
                fill: $86ce5f136d8a0e82$var$buildingOutline
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: ".38529",
                cy: "6.3229",
                r: ".19792",
                fill: $86ce5f136d8a0e82$var$buildingInnerFrameFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m6.4861 0.78112 1e-5 5.146-0.16319-3.7e-5h-4e-5c-0.21861 0-0.3958 0.17722-0.3958 0.39583l5e-6 0.19792-5.146-0.03471v-0.1632c0-0.21861-0.17722-0.39583-0.39583-0.39583l-0.16319 3.7e-5v-5.146l0.16319-2.94e-4c0.21861 0 0.39579-0.17722 0.39581-0.39583l2e-5 -0.16288h5.146l-2.1e-5 0.163c-3e-6 0.21861 0.17722 0.39571 0.39584 0.39593z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$buildingInnerFrameFill,
                strokeWidth: ".07"
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$BuildingUpgrade2Def = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BuildingDef, $86ce5f136d8a0e82$var$BuilderDef, $86ce5f136d8a0e82$var$SansTwoDef, $86ce5f136d8a0e82$var$PlaceArrowDef, function BuildingUpgrade2Def() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "building-upgrade-2",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(.62986 1.3872)",
                xlinkHref: "#building"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.16877 0 0 .16877 2e-6 1e-6)",
                xlinkHref: "#builder"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.30824 0 0 .30824 1.3666 1.318)",
                xlinkHref: "#sans-two"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(6.322 5.8047)",
                xlinkHref: "#place-arrow"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$CertificateDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "certificate",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m2.6973 5.8581 0.63624 2.1206c0.09367 0.31223 0.39888 0.30906 0.5055 0.14094l0.41936-0.77603 0.82438 0.30778c0.18086 0.06752 0.42251-0.14274 0.28828-0.43979l-0.90374-1.9999",
                fill: $86ce5f136d8a0e82$var$certificateFill,
                stroke: $86ce5f136d8a0e82$var$certificateOutline,
                strokeWidth: ".35914"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m1.598 5.1858-0.89477 2.0251c-0.13175 0.29817 0.10671 0.50704 0.29256 0.43567l0.81202-0.31181 0.43754 0.76434c0.09591 0.16754 0.41387 0.16613 0.50493-0.14686l0.61307-2.1073",
                fill: $86ce5f136d8a0e82$var$certificateFill,
                stroke: $86ce5f136d8a0e82$var$certificateOutline,
                strokeWidth: ".35914"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m5.9279 4.1193c-0.045536 0.14011-0.70132 0.46719-0.78793 0.58638-0.086604 0.11918-0.19513 0.84393-0.31433 0.93052-0.1192 0.086588-0.84199-0.034262-0.98211 0.011254-0.14012 0.045516-0.65392 0.56806-0.80125 0.56805-0.14733-1.07e-5 -0.66105-0.52263-0.80116-0.56817-0.14011-0.045537-0.86293 0.075208-0.98211-0.011398-0.11918-0.086605-0.22761-0.81137-0.3142-0.93057-0.086586-0.1192-0.74233-0.44637-0.78784-0.58649-0.045518-0.14012 0.29277-0.7902 0.29279-0.93752 1.041e-5 -0.14733-0.33819-0.79745-0.29265-0.93757s0.70132-0.46719 0.78793-0.58638c0.086604-0.11918 0.19513-0.84393 0.31433-0.93052 0.1192-0.086588 0.84199 0.034262 0.98211-0.011254 0.14012-0.045516 0.65392-0.56806 0.80125-0.56805 0.14733 1.067e-5 0.66105 0.52263 0.80116 0.56817 0.14011 0.045537 0.86293-0.075208 0.98211 0.011398 0.11918 0.086605 0.22761 0.81137 0.3142 0.93057 0.086586 0.1192 0.74233 0.44637 0.78784 0.58649 0.045518 0.14012-0.29277 0.7902-0.29279 0.93752-1.04e-5 0.14733 0.33819 0.79745 0.29265 0.93757z",
                fill: $86ce5f136d8a0e82$var$certificateFill,
                stroke: $86ce5f136d8a0e82$var$certificateOutline,
                strokeWidth: ".29519"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: "3.0425",
                cy: "3.1816",
                r: "2.0255",
                fill: $86ce5f136d8a0e82$var$certificateInnerFill,
                stroke: $86ce5f136d8a0e82$var$certificateInnerOutline,
                strokeWidth: ".15"
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$CertificateGain2Def = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SansTwoDef, $86ce5f136d8a0e82$var$AdvanceArrowDef, function CertificateGain2Def() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "certificate-gain-2",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.1695 0.082499 3.087 2.1515v2.97l-3.087 2.1281-3.087-2.1281v-2.97z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeLinejoin: "round",
                strokeWidth: ".165"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m6.2564 2.234-3.087 2.0697-3.087-2.0697 3.087-2.1515z",
                fill: $86ce5f136d8a0e82$var$modelDarkSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.1695 4.3037-3.087-2.0697v2.97l3.087 2.1281z",
                fill: $86ce5f136d8a0e82$var$modelMidSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.1695 4.3037 3.087-2.0697v2.97l-3.087 2.1281z",
                fill: $86ce5f136d8a0e82$var$modelLightSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.59642 0 0 .59642 2.2217 1.9784)",
                xlinkHref: "#sans-two"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(.781 6.9333)",
                xlinkHref: "#advance-arrow"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$CertificatePerm1Def = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SansOneDef, $86ce5f136d8a0e82$var$CertificateDef, $86ce5f136d8a0e82$var$SansInfDef, function CertificatePerm1Def() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "certificate-perm-1",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(0 1.3461)",
                xlinkHref: "#sans-one"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(4.0908)",
                xlinkHref: "#certificate"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.106 3.0201)",
                xlinkHref: "#sans-inf"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$CertificatePerm2Def = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SansTwoDef, $86ce5f136d8a0e82$var$CertificateDef, $86ce5f136d8a0e82$var$SansInfDef, function CertificatePerm2Def() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "certificate-perm-2",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(0 1.3644)",
                xlinkHref: "#sans-two"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(4.6386)",
                xlinkHref: "#certificate"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.654 3.0201)",
                xlinkHref: "#sans-inf"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$BranchletDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "branchlet",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m1.8932 0.082499 3.1254 0.87643 1.4304 1.4717v3.6711l-3.1006 0.81029-3.266-0.8599v-3.6546z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeLinejoin: "round",
                strokeWidth: ".165"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.3484 3.241 1.6702-2.282-3.1254-0.87643-1.8107 2.3151z",
                fill: $86ce5f136d8a0e82$var$modelMidSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.3484 6.9121v-3.6711l-3.2659-0.84336v3.6546z",
                fill: $86ce5f136d8a0e82$var$modelDarkSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.3484 3.241 1.6702-2.282 1.4304 1.4717v3.6711l-3.1006 0.81029z",
                fill: $86ce5f136d8a0e82$var$modelLightSide
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$BranchletPlaceDef = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BranchletDef, $86ce5f136d8a0e82$var$PlaceArrowDef, function BranchletPlaceDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "branchlet-place",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                xlinkHref: "#branchlet"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(5.6285 4.5861)",
                xlinkHref: "#place-arrow"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$MediumTownIconDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "medium-town",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "5.884",
                height: "5.884",
                ry: "1",
                fill: $86ce5f136d8a0e82$var$mediumTownIconFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m5.1744 1.5467v2.7905l-0.11524-8.5e-5c-0.39867-8.5e-5 -0.72192 0.32316-0.72192 0.72192v0.11533l-2.7905 2.41e-4v-0.11562c0-0.3987-0.32325-0.72195-0.72192-0.722l-0.11524 2.17e-4v-2.7905h0.11533c0.39875 0 0.722-0.32325 0.72192-0.72192l-8.4e-5 -0.11524h2.7905v0.11533c0 0.39875 0.32325 0.722 0.72192 0.72192z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$mediumTownIconInner,
                strokeWidth: ".067"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: ".82488",
                cy: ".82488",
                r: ".14883",
                fill: $86ce5f136d8a0e82$var$mediumTownIconInner
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: "5.0591",
                cy: ".82488",
                r: ".14883",
                fill: $86ce5f136d8a0e82$var$mediumTownIconInner
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: "5.0591",
                cy: "5.0591",
                r: ".14883",
                fill: $86ce5f136d8a0e82$var$mediumTownIconInner
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("circle", {
                cx: ".82488",
                cy: "5.0591",
                r: ".14883",
                fill: $86ce5f136d8a0e82$var$mediumTownIconInner
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m3.5982 3.6028-0.46496-0.19898-0.1913 0.96643-0.1913-0.96643-0.47137 0.20084 0.20082-0.47138-0.96643-0.1913 0.96643-0.1913-0.199-0.46494 0.46954 0.1944 0.1913-0.96643 0.1913 0.96643 0.46723-0.19671-0.19669 0.46725 0.96643 0.1913-0.96643 0.1913z",
                fill: $86ce5f136d8a0e82$var$mediumTownIconInner
            })
        ]
    });
}
function $86ce5f136d8a0e82$var$EngineDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)("g", {
        id: "engine",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m6.4578 0.76112 0.30117 0.52164h0.57517l0.22825-0.22825-0.36055-0.36055v-0.66146l1.9203-2e-7h2.0846v0.66146l-0.30566 0.36055v1.0677c1.1506 0 1.0986 0.67324 1.0986 1.8218 0.12917 0.07453 0.30546 0.2025 0.30546 0.35223s0.22306 1.8703 0.57836 2.2256h-0.88326l-4.6e-4 0.40617c-7.9e-4 0.69795-0.68077 1.3845-1.3845 1.3845l-9.0394 9.18e-4c-0.69747 0-1.1751-1.1184-1.1751-1.818h-0.35079v-1.3564h0.28648c0.15464 0 0.28145-0.12154 0.28647-0.26894v-2.415c0-0.30314-0.28971-0.6153-0.59049-0.6153v-1.0973z",
                fill: $86ce5f136d8a0e82$var$modelDarkSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m2.1197 0.76112h4.3381v1.4078h0.98222v-0.51449l0.5028-0.5028 0.5028 0.5028v0.51449h0.98222v-1.1144l-0.30567-0.36055v-0.66146h2.0846v0.66146l-0.30566 0.36055v1.0677c1.1464 0 1.0986 0.66813 1.0986 1.8218 0.14477 0.03879 0.30546 0.1986 0.30546 0.35223s0.22462 1.8718 0.57836 2.2256h-0.88326l-4.6e-4 0.40618c0 0.70158-0.68822 1.3792-1.3845 1.3845-0.69632 0.0054-1.3845-0.67997-1.3845-1.3845v-0.40624h-0.48809l9e-5 0.40624c0 0.70434-0.68133 1.3859-1.3845 1.3845-0.70318-0.0014-1.3845-0.6807-1.3845-1.3845v-0.40624h-0.48809l9e-5 0.40624c0 0.70092-0.68413 1.385-1.385 1.385s-1.385-0.68038-1.385-1.385v-0.43264h-0.59616v-1.3564h0.32657c0.14504 0 0.32656-0.11717 0.32656-0.26894v-2.415c0-0.30303-0.3522-0.6153-0.65313-0.6153z",
                fill: $86ce5f136d8a0e82$var$modelLightSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m7.2019 0.69396 1.9203-2e-7 0.30567 0.36055h-1.8654z",
                fill: $86ce5f136d8a0e82$var$modelMidSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m2.1197 1.8397c0.29465 0.01622 0.65313 0.31608 0.65313 0.6153h-2.1498c0-0.30241-0.29068-0.6153-0.59049-0.6153z",
                fill: $86ce5f136d8a0e82$var$modelMidSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m0.40083 6.4954h2.315v0.43264l0.12153 0.5216h-2.2185c-0.10535-0.28238-0.21803-0.50163-0.21803-0.95424z",
                fill: $86ce5f136d8a0e82$var$modelMidSide
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m6.4578 0.76112 0.30117 0.52164h0.57517l0.22825-0.22825-0.36055-0.36055v-0.66146l1.9203-2e-7h2.0846v0.66146l-0.30566 0.36055v1.0677c1.1506 0 1.0986 0.67324 1.0986 1.8218 0.12917 0.07453 0.30546 0.2025 0.30546 0.35223s0.22306 1.8703 0.57836 2.2256h-0.88326l-4.6e-4 0.40617c-7.9e-4 0.69795-0.68077 1.3845-1.3845 1.3845l-9.0394 9.18e-4c-0.69747 0-1.1751-1.1184-1.1751-1.818h-0.35079v-1.3564h0.28648c0.15464 0 0.28145-0.12154 0.28647-0.26894v-2.415c0-0.30314-0.28971-0.6153-0.59049-0.6153v-1.0973z",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$black,
                strokeWidth: ".065"
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$Cowboy = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CowboyDef, function Cowboy() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        xlinkHref: "#cowboy"
    });
});
const $86ce5f136d8a0e82$var$Builder = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BuilderDef, function Builder() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        xlinkHref: "#builder"
    });
});
const $86ce5f136d8a0e82$var$Engineer = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$EngineerDef, function Engineer() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        xlinkHref: "#engineer"
    });
});
const $86ce5f136d8a0e82$var$BagTileFrame = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BagTileFrameDef, function BagTileFrame() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        xlinkHref: "#bag-tile-frame"
    });
});
function $86ce5f136d8a0e82$var$Flood() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        d: "m6.3265 5.2368c2.8334 3.6974 4.2499 6.328 4.2499 7.8926a4.2499 4.2499 0 1 1-8.4997 0c0-1.5646 1.4164-4.1952 4.2499-7.8926z",
        fill: $86ce5f136d8a0e82$var$floodFill,
        strokeWidth: ".60712"
    });
}
function $86ce5f136d8a0e82$var$Drought() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        d: "m9.9703 13.65c-0.17065-0.2337-0.26755-0.46798-0.26714-0.73736-4.288e-4 -0.26953 0.096485-0.50339 0.26714-0.73723 0.17107-0.23091 0.41406-0.4597 0.71602-0.64341-0.3524 0.02852-0.68344-0.0139-0.95759-0.10027-0.27544-0.088616-0.49117-0.2215-0.64903-0.43878-0.15814-0.21714-0.21855-0.46363-0.21799-0.75309 0.0022576-0.28738 0.064622-0.61533 0.20114-0.94145-0.26825 0.23019-0.56097 0.39016-0.83387 0.48091-0.27543 0.089607-0.5281 0.10872-0.7826 0.025707-0.25506-0.082436-0.44803-0.24635-0.6184-0.48049-0.16741-0.23356-0.3104-0.53527-0.39158-0.87922-0.081182 0.34395-0.22403 0.64566-0.39158 0.87922-0.17023 0.23412-0.36348 0.39805-0.6184 0.48049-0.25464 0.083011-0.50717 0.0639-0.78246-0.025707-0.2729-0.090746-0.5656-0.25056-0.83387-0.48091 0.13652 0.32612 0.19875 0.65407 0.201 0.94145 4.18e-4 0.28948-0.059819 0.53595-0.21798 0.75309-0.15802 0.21728-0.3736 0.35015-0.64917 0.43878-0.27387 0.08637-0.60493 0.12879-0.95732 0.10027 0.30197 0.18372 0.54495 0.4125 0.7159 0.64341 0.17079 0.23384 0.26756 0.4677 0.26728 0.73723 2.742e-4 0.26939-0.096486 0.50366-0.26728 0.73736-0.17093 0.23091-0.41393 0.45955-0.7159 0.64341 0.3524-0.02851 0.68344 0.01376 0.95732 0.10015 0.27557 0.08876 0.49115 0.22162 0.64917 0.43892 0.15816 0.217 0.2184 0.46363 0.21798 0.75324-0.00225 0.2875-0.064483 0.61518-0.201 0.9413 0.26827-0.23035 0.56096-0.39018 0.83387-0.48091 0.27527-0.08959 0.52782-0.1087 0.78246-0.0257 0.25492 0.08245 0.44817 0.24635 0.6184 0.48049 0.16756 0.2337 0.3104 0.53525 0.39158 0.87921 0.081181-0.34396 0.22417-0.6455 0.39158-0.87921 0.17037-0.23414 0.36336-0.39805 0.6184-0.48049 0.25464-0.08299 0.50717-0.06391 0.7826 0.0257 0.2729 0.09074 0.56562 0.25056 0.83387 0.48091-0.13652-0.32614-0.19887-0.65381-0.20114-0.94145-5.568e-4 -0.28948 0.059839-0.53609 0.21799-0.75309 0.158-0.2173 0.37359-0.35015 0.64903-0.43892 0.27415-0.08637 0.60519-0.12865 0.95759-0.10015-0.30199-0.18384-0.54497-0.4125-0.71602-0.64341z",
        fill: $86ce5f136d8a0e82$var$droughtFill
    });
}
function $86ce5f136d8a0e82$var$Rockslide() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        d: "m10.06 10.168c0.0097 0.01037 0.01638 0.02321 0.01934 0.03719l0.60553 2.8435c0.0058 0.0275-0.0036 0.05608-0.02444 0.07476l-4.8806 4.3673c-0.011402 0.01024-0.025561 0.01685-0.040729 0.0191l-2.206 0.32977c-0.039151 0.0058-0.076534-0.01828-0.087118-0.05654l-1.2565-4.5099c-0.00517-0.01866-0.0033-0.03863 0.0053-0.05596l2.3149-4.6559c0.011161-0.022414 0.032301-0.038145 0.056915-0.042328l3.0931-0.53273c0.024059-0.00422 0.048715 0.00315 0.066551 0.01976l2.3296 2.1579c0.0016 0.0012 0.0029 0.0027 0.0043 0.0041z",
        fill: $86ce5f136d8a0e82$var$rockSlideFill
    });
}
const $86ce5f136d8a0e82$var$Bandit = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$RevolverBaseDef, function Bandit({ kind: kind }) {
    const fill = kind === "Green" ? $86ce5f136d8a0e82$var$banditGreenFill : kind === "Orange" ? $86ce5f136d8a0e82$var$banditOrangeFill : "";
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        transform: "matrix(2.6486 0 0 2.6486 2.1861 5.8539)",
        xlinkHref: "#revolver-base",
        fill: fill,
        stroke: $86ce5f136d8a0e82$var$black,
        strokeWidth: ".048"
    });
});
const $86ce5f136d8a0e82$var$HandTrail = $86ce5f136d8a0e82$var$dependencies([
    $86ce5f136d8a0e82$var$HandDef,
    [
        "hand"
    ]
], function HandTrail({ bandit: bandit, hand: hand }) {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        transform: `matrix(4.2965 0 0 4.2965 12.389 ${bandit ? "7.645" : "2.2446"})`,
        xlinkHref: hand === "Green" ? "#hand-green" : hand === "Black" ? "#hand-black" : ""
    });
});
function $86ce5f136d8a0e82$var$StationMasterFrameClipsDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("clipPath", {
                id: "station-master-frame-top-clip",
                children: /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                    width: "22",
                    height: "13",
                    fillRule: "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("clipPath", {
                id: "station-master-frame-bottom-clip",
                children: /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                    y: "13",
                    width: "22",
                    height: "13",
                    fillRule: "evenodd"
                })
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$StationMasterFrame = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$StationMasterFrameClipsDef, function StationMasterFrame() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "22",
                height: "26",
                ry: "3.63",
                clipPath: "url(#station-master-frame-top-clip)",
                fill: $86ce5f136d8a0e82$var$stationMasterFrameTopFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                width: "22",
                height: "26",
                ry: "3.63",
                clipPath: "url(#station-master-frame-bottom-clip)",
                fill: $86ce5f136d8a0e82$var$stationMasterFrameBottomFill
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m0 13h22",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$white,
                strokeWidth: ".6"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$BanditClipsDef() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("clipPath", {
                id: "bandit-top-clip",
                children: /*#__PURE__*/ (0, $228IU.jsx)("path", {
                    d: "m12.538 8.4171 5.8796-1.8852v-2.7431h-5.8796z"
                })
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("clipPath", {
                id: "bandit-bottom-clip",
                children: /*#__PURE__*/ (0, $228IU.jsx)("path", {
                    d: "m12.538 8.4005 5.8796-1.8852v4.3802l-5.8796 2e-6z"
                })
            })
        ]
    });
}
const $86ce5f136d8a0e82$var$StationMasterTile1 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$HazzardDef, $86ce5f136d8a0e82$var$TakeArrowDef, $86ce5f136d8a0e82$var$BanditClipsDef, $86ce5f136d8a0e82$var$RevolverBaseDef, $86ce5f136d8a0e82$var$ObjectiveDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "3"
    }
], function StationMasterTile1() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.8102 3.7521)",
                xlinkHref: "#hazzard"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.6408 2.6411)",
                xlinkHref: "#take-arrow"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m12.703 2.2025-3.4065 9.0951",
                fill: "none",
                stroke: $86ce5f136d8a0e82$var$white,
                strokeWidth: ".45"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                transform: "translate(.77188 -.061185)",
                x: "12.538",
                y: "3.7888",
                width: "5.8796",
                height: "7.1068",
                ry: ".8",
                clipPath: "url(#bandit-bottom-clip)",
                fill: $86ce5f136d8a0e82$var$banditGreenFill,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                transform: "translate(.77188 -.061185)",
                x: "12.538",
                y: "3.7888",
                width: "5.8796",
                height: "7.1068",
                ry: ".8",
                clipPath: "url(#bandit-top-clip)",
                fill: $86ce5f136d8a0e82$var$banditOrangeFill,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(14.645 4.6159)",
                xlinkHref: "#revolver-base",
                fill: $86ce5f136d8a0e82$var$black
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(17.878 2.6656)",
                xlinkHref: "#take-arrow"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.5527 15.277)",
                xlinkHref: "#objective"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(5.1985 16.335)",
                xlinkHref: "#objective"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.522 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 14.175 16.069)",
                xlinkHref: "#vp-3"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile2 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CertificatePerm1Def, $86ce5f136d8a0e82$var$SansTwoDef, $86ce5f136d8a0e82$var$CertificateDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "3"
    }
], function StationMasterTile2() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(3.0534 2.5437)",
                xlinkHref: "#certificate-perm-1"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.68263 0 0 .68263 2.3324 17.13)",
                xlinkHref: "#sans-two"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.83095 0 0 .83095 5.5741 15.755)",
                xlinkHref: "#certificate"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.963 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 14.396 16.069)",
                xlinkHref: "#vp-3"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile3 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CertificatePerm1Def, $86ce5f136d8a0e82$var$RevolverBaseDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "3"
    }
], function StationMasterTile3() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(3.0534 2.5437)",
                xlinkHref: "#certificate-perm-1"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: "2.011",
                y: "14.903",
                width: "5.8796",
                height: "7.1068",
                ry: ".8",
                fill: $86ce5f136d8a0e82$var$banditGreenFill,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(3.3461 15.791)",
                xlinkHref: "#revolver-base",
                fill: $86ce5f136d8a0e82$var$black
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: "5.7152",
                y: "16.49",
                width: "5.8796",
                height: "7.1068",
                ry: ".8",
                fill: $86ce5f136d8a0e82$var$banditOrangeFill,
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.0502 17.379)",
                xlinkHref: "#revolver-base",
                fill: $86ce5f136d8a0e82$var$black
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(12.606 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 14.717 16.069)",
                xlinkHref: "#vp-3"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile4 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CertificatePerm1Def, $86ce5f136d8a0e82$var$HazzardDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "3"
    }
], function StationMasterTile4() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(3.0534 2.5437)",
                xlinkHref: "#certificate-perm-1"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.011 14.903)",
                xlinkHref: "#hazzard"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(5.7152 16.49)",
                xlinkHref: "#hazzard"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(12.606 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 14.717 16.069)",
                xlinkHref: "#vp-3"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile5 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CoinDef, $86ce5f136d8a0e82$var$SerifTwoWhiteDef, $86ce5f136d8a0e82$var$WorkerDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "1"
    }
], function StationMasterTile5() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(6.7 2.4504)",
                fill: "#ffffff",
                xlinkHref: "#coin"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(9.7167 4.7922)",
                fill: "#ffffff",
                xlinkHref: "#serif-two-white"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.9036 15.697)",
                xlinkHref: "#worker"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(10.821 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 13.825 16.069)",
                xlinkHref: "#vp-1"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile6 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CertificatePerm1Def, $86ce5f136d8a0e82$var$StationDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "3"
    }
], function StationMasterTile6() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(3.0534 2.5437)",
                xlinkHref: "#certificate-perm-1"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.3557 15.14)",
                xlinkHref: "#station"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(5.2648 17.136)",
                xlinkHref: "#station"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.916 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 14.372 16.069)",
                xlinkHref: "#vp-3"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile7 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CertificateGain2Def, $86ce5f136d8a0e82$var$BuildingDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "2"
    }
], function StationMasterTile7() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.8305 1.5326)",
                xlinkHref: "#certificate-gain-2"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.7299 15.896)",
                xlinkHref: "#building"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.168 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 13.998 16.069)",
                xlinkHref: "#vp-2"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile8 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CertificatePerm2Def, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "0"
    }
], function StationMasterTile8() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.7795 2.5437)",
                xlinkHref: "#certificate-perm-2"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.8992 15.508)",
                xlinkHref: "#vp-0"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile9 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CoinDef, $86ce5f136d8a0e82$var$SerifOneWhiteDef, $86ce5f136d8a0e82$var$SerifTwoWhiteDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "0"
    }
], function StationMasterTile9() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(6.7 2.4504)",
                xlinkHref: "#coin"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(8.5186 4.8773)",
                xlinkHref: "#serif-one-white"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(10.916 4.7674)",
                xlinkHref: "#serif-two-white"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.8992 15.508)",
                xlinkHref: "#vp-0"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile10 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BranchletPlaceDef, $86ce5f136d8a0e82$var$MediumTownIconDef, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "2"
    }
], function StationMasterTile10() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.7342 3.2527)",
                xlinkHref: "#branchlet-place"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(2.936 16.308)",
                xlinkHref: "#medium-town"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(10.756 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 13.792 16.069)",
                xlinkHref: "#vp-2"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$StationMasterTile11 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BuildingUpgrade2Def, $86ce5f136d8a0e82$var$Cattle3to5Def, $86ce5f136d8a0e82$var$SansColonDef, [
    $86ce5f136d8a0e82$var$ShieldVpDef,
    {
        value: "1"
    }
], function StationMasterTile11() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.0162 2.6674)",
                xlinkHref: "#building-upgrade-2"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(3.2507 15.699)",
                xlinkHref: "#cattle-3-5"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(10.126 17.848)",
                xlinkHref: "#sans-colon"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.85006 0 0 .85006 13.477 16.069)",
                xlinkHref: "#vp-1"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$MediumTownFrame() {
    return /*#__PURE__*/ (0, $228IU.jsx)("rect", {
        width: "27",
        height: "27",
        ry: "3.7696",
        fill: $86ce5f136d8a0e82$var$mediumTownFrameFill
    });
}
const $86ce5f136d8a0e82$var$MediumTownTile1 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$SansTwoDef, $86ce5f136d8a0e82$var$SansXDef, $86ce5f136d8a0e82$var$HazzardTakeDef, function MediumTownTile1() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("rect", {
                x: "4.9461",
                y: "5.9577",
                width: "4.6723",
                height: "7.0845",
                fill: $86ce5f136d8a0e82$var$trashCardFill,
                stroke: $86ce5f136d8a0e82$var$black,
                strokeLinejoin: "round",
                strokeWidth: ".065",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.66252 0 0 .66252 3.7551 4.0786)",
                xlinkHref: "#sans-two"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.66252 0 0 .66252 5.9528 5.1585)",
                xlinkHref: "#sans-x"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m12.028 14.263-1.1887 1.1887-1.1887-1.1887-1.1887 1.1887-1.1887-1.1887 1.1887-1.1887-1.1887-1.1887 1.1887-1.1887 1.1887 1.1887 1.1887-1.1887 1.1887 1.1887-1.1887 1.1887z",
                fill: $86ce5f136d8a0e82$var$trashCrossFill,
                stroke: $86ce5f136d8a0e82$var$white,
                strokeWidth: ".165"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(1.1794 0 0 1.1794 15.681 11.999)",
                xlinkHref: "#hazzard-take"
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$MediumTownTile2 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$CoinDef, $86ce5f136d8a0e82$var$SerifFiveWhiteDef, $86ce5f136d8a0e82$var$CattleTake3Def, function MediumTownTile2() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.83141 0 0 .83141 5.5916 5.9253)",
                xlinkHref: "#coin"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(7.9119 7.542)",
                xlinkHref: "#serif-five-white"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(1.298 0 0 1.298 16.419 12.891)",
                xlinkHref: "#cattle-take-3"
            })
        ]
    });
});
// Todo: plus and two seem offset
const $86ce5f136d8a0e82$var$MediumTownTile3 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$WorkerDef, $86ce5f136d8a0e82$var$TakeArrowDef, $86ce5f136d8a0e82$var$CoinDef, $86ce5f136d8a0e82$var$SerifTwoBaseDef, function MediumTownTile3() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(1.7473 0 0 1.7473 8.2463 7.2911)",
                xlinkHref: "#worker"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(1.4966 0 0 1.4966 18.002 7.278)",
                xlinkHref: "#take-arrow"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(.83136 0 0 .83136 15.3 15.549)",
                xlinkHref: "#coin"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("path", {
                d: "m16.558 19.454v-0.53008l0.53008 1e-6 -1e-6 -0.53008h0.53008l-1e-6 0.53008 0.53008-1e-6v0.53008l-0.53008 1e-6 1e-6 0.53008h-0.53008l1e-6 -0.53008z",
                fill: $86ce5f136d8a0e82$var$costReductionFill,
                stroke: $86ce5f136d8a0e82$var$white,
                strokeWidth: ".4",
                style: {
                    paintOrder: "stroke"
                }
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "matrix(1.0418 0 0 1.0418 18.542 17.096)",
                xlinkHref: "#serif-two-base",
                fill: $86ce5f136d8a0e82$var$costReductionFill,
                stroke: $86ce5f136d8a0e82$var$white,
                strokeWidth: ".4",
                style: {
                    paintOrder: "stroke"
                }
            })
        ]
    });
});
const $86ce5f136d8a0e82$var$MediumTownTile4 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$BuildingUpgrade2Def, function MediumTownTile4() {
    return /*#__PURE__*/ (0, $228IU.jsx)("use", {
        transform: "matrix(2.0522 0 0 2.0522 5.3244 3.7703)",
        xlinkHref: "#building-upgrade-2"
    });
});
const $86ce5f136d8a0e82$var$MediumTownTile5 = $86ce5f136d8a0e82$var$dependencies($86ce5f136d8a0e82$var$EngineDef, $86ce5f136d8a0e82$var$SerifThreeWhiteDef, $86ce5f136d8a0e82$var$AdvanceArrowDef, function MediumTownTile5() {
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(5.0148 9.3271)",
                xlinkHref: "#engine"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "translate(11.289 11.815)",
                xlinkHref: "#serif-three-white"
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("use", {
                transform: "rotate(-90 17.516 -.96735)",
                xlinkHref: "#advance-arrow"
            })
        ]
    });
});
function $86ce5f136d8a0e82$var$MediumTownDivider() {
    return /*#__PURE__*/ (0, $228IU.jsx)("path", {
        d: "m8.8674 18.992 10.125-10.125",
        fill: "none",
        stroke: $86ce5f136d8a0e82$var$white,
        strokeWidth: "1.1"
    });
}
function $86ce5f136d8a0e82$var$Tile({ traits: traits, ...props }) {
    const { bag: bag, stationMaster: stationMaster, mediumTown: mediumTown } = traits;
    const { kind: kind, hand: hand, tile: tile } = traits;
    const size = mediumTown ? "27 27" : "22 26";
    const nodes = (0, (/*@__PURE__*/$parcel$interopDefault($uxeiv)))(bag ? traits.Cowboy ? [
        $86ce5f136d8a0e82$var$Cowboy
    ] : traits.Builder ? [
        $86ce5f136d8a0e82$var$Builder
    ] : traits.Engineer ? [
        $86ce5f136d8a0e82$var$Engineer
    ] : [
        $86ce5f136d8a0e82$var$BagTileFrame,
        traits.Flood ? $86ce5f136d8a0e82$var$Flood : traits.Drought ? $86ce5f136d8a0e82$var$Drought : traits.Rockslide ? $86ce5f136d8a0e82$var$Rockslide : traits.Bandit ? [
            $86ce5f136d8a0e82$var$Bandit,
            {
                kind: kind
            }
        ] : null,
        [
            $86ce5f136d8a0e82$var$HandTrail,
            {
                bandit: traits.Bandit,
                hand: hand
            }
        ],
        traits.hazzard ? [
            $86ce5f136d8a0e82$var$ShieldHazzard,
            {
                value: kind
            }
        ] : null
    ] : stationMaster ? [
        $86ce5f136d8a0e82$var$StationMasterFrame,
        tile === 1 ? $86ce5f136d8a0e82$var$StationMasterTile1 : tile === 2 ? $86ce5f136d8a0e82$var$StationMasterTile2 : tile === 3 ? $86ce5f136d8a0e82$var$StationMasterTile3 : tile === 4 ? $86ce5f136d8a0e82$var$StationMasterTile4 : tile === 5 ? $86ce5f136d8a0e82$var$StationMasterTile5 : tile === 6 ? $86ce5f136d8a0e82$var$StationMasterTile6 : tile === 7 ? $86ce5f136d8a0e82$var$StationMasterTile7 : tile === 8 ? $86ce5f136d8a0e82$var$StationMasterTile8 : tile === 9 ? $86ce5f136d8a0e82$var$StationMasterTile9 : tile === 10 ? $86ce5f136d8a0e82$var$StationMasterTile10 : tile === 11 ? $86ce5f136d8a0e82$var$StationMasterTile11 : null
    ] : mediumTown ? [
        $86ce5f136d8a0e82$var$MediumTownFrame,
        tile === 1 ? $86ce5f136d8a0e82$var$MediumTownTile1 : tile === 2 ? $86ce5f136d8a0e82$var$MediumTownTile2 : tile === 3 ? $86ce5f136d8a0e82$var$MediumTownTile3 : tile === 4 ? $86ce5f136d8a0e82$var$MediumTownTile4 : tile === 5 ? $86ce5f136d8a0e82$var$MediumTownTile5 : null,
        (0, $2XZ0q.default)(tile, [
            1,
            2
        ]) ? $86ce5f136d8a0e82$var$MediumTownDivider : null
    ] : []);
    const defs = $86ce5f136d8a0e82$var$resolve(nodes);
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $aiED1.Svg), {
        ...props,
        viewBox: `0 0 ${size}`,
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("defs", {
                children: render(defs)
            }),
            render(nodes)
        ]
    });
    function render(items) {
        return /*#__PURE__*/ (0, $228IU.jsx)((0, $228IU.Fragment), {
            children: (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(items, (item, i)=>{
                const [Component, props] = $86ce5f136d8a0e82$var$castWithProps(item);
                return /*#__PURE__*/ (0, $d4J5n.createElement)(Component, {
                    ...props,
                    key: i
                });
            })
        });
    }
}
function $86ce5f136d8a0e82$var$dependencies(...dependencies1) {
    const Component = (0, (/*@__PURE__*/$parcel$interopDefault($EXbAW)))(dependencies1);
    dependencies1 = (0, (/*@__PURE__*/$parcel$interopDefault($dcyLB)))(dependencies1);
    return (0, (/*@__PURE__*/$parcel$interopDefault($iK0sn)))(Component, {
        dependencies: dependencies1
    });
}
function $86ce5f136d8a0e82$var$resolve(nodes, parentProps = {}, found = new Set(), inner = false) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($jqhs5)))(nodes, (defs, node)=>{
        let props;
        [node, props] = $86ce5f136d8a0e82$var$castWithProps(node);
        props = parent(props);
        const depRepr = $86ce5f136d8a0e82$var$nodeRepr(node, props);
        if (found.has(depRepr)) return defs;
        found.add(depRepr);
        inner && (defs = [
            ...defs,
            [
                node,
                props
            ]
        ]);
        const depDefs = $86ce5f136d8a0e82$var$resolve(node.dependencies || [], props, found, true);
        return [
            ...defs,
            ...depDefs
        ];
    }, []);
    function parent(props) {
        return (0, (/*@__PURE__*/$parcel$interopDefault($ciXjz)))(props) ? (0, (/*@__PURE__*/$parcel$interopDefault($iAhJd)))(parentProps, props) : props;
    }
}
function $86ce5f136d8a0e82$var$castWithProps(node) {
    const [dep, props = {}] = (0, (/*@__PURE__*/$parcel$interopDefault($eHOmi)))(node);
    return [
        dep,
        props
    ];
}
function $86ce5f136d8a0e82$var$nodeRepr(dep, props) {
    return `${$86ce5f136d8a0e82$var$funcName(dep)}${repr(props)}`;
    function repr(v) {
        return (0, (/*@__PURE__*/$parcel$interopDefault($j1nRE)))(v) ? `{${(0, (/*@__PURE__*/$parcel$interopDefault($elttg)))((0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))((0, (/*@__PURE__*/$parcel$interopDefault($dCnO0)))((0, (/*@__PURE__*/$parcel$interopDefault($7qGmp)))(v), [
            0
        ]), ([k, v])=>`${k}:${repr(v)}`), ",")}}` : (0, (/*@__PURE__*/$parcel$interopDefault($ciXjz)))(v) ? `[${(0, (/*@__PURE__*/$parcel$interopDefault($elttg)))((0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(v, repr(v)), ",")}]` : `${v}`;
    }
}
const $86ce5f136d8a0e82$var$functionPattern = /^\s*function(?:\s|\s*\/\*[^(?:*/)]+\*\/\s*)*([^\s(/]+)/;
function $86ce5f136d8a0e82$var$funcName(fn) {
    fn = Object(fn);
    if (typeof fn !== "function") return null;
    const n = fn.name;
    const m = n ? [
        ,
        n
    ] : fn.toString().match($86ce5f136d8a0e82$var$functionPattern);
    return m ? m[1] : "";
}

});
parcelRegister("lmHDp", function(module, exports) {

$parcel$export(module.exports, "black", () => $f8dd7ff56cacfe8e$export$c073df10e766abfa);
$parcel$export(module.exports, "white", () => $f8dd7ff56cacfe8e$export$8fa4e5556fd77a60);
$parcel$export(module.exports, "gray_B", () => $f8dd7ff56cacfe8e$export$f7692d85ac66a8a4);
$parcel$export(module.exports, "gray_3", () => $f8dd7ff56cacfe8e$export$8059f8fe64b146ae);
$parcel$export(module.exports, "silver", () => $f8dd7ff56cacfe8e$export$2cf0ade8bd62135d);
$parcel$export(module.exports, "dustyGray", () => $f8dd7ff56cacfe8e$export$57721355f82ccdfd);
$parcel$export(module.exports, "boulder", () => $f8dd7ff56cacfe8e$export$ba81c7205efe8b46);
$parcel$export(module.exports, "scorpion", () => $f8dd7ff56cacfe8e$export$d64defe8d8963bbf);
$parcel$export(module.exports, "sangria", () => $f8dd7ff56cacfe8e$export$21703cf766d05540);
$parcel$export(module.exports, "burntOrange", () => $f8dd7ff56cacfe8e$export$377b85263d8a9ed3);
$parcel$export(module.exports, "blazeOrange", () => $f8dd7ff56cacfe8e$export$f93880688c8dbfa);
$parcel$export(module.exports, "selectiveYellow", () => $f8dd7ff56cacfe8e$export$8bd95c697f75d0ca);
$parcel$export(module.exports, "tropicalRainForest", () => $f8dd7ff56cacfe8e$export$a5974a494202a5c);
$parcel$export(module.exports, "deepSea", () => $f8dd7ff56cacfe8e$export$1dd76555ec7c0af7);
$parcel$export(module.exports, "curiousBlue", () => $f8dd7ff56cacfe8e$export$7a1555d7a1069210);
$parcel$export(module.exports, "piper", () => $f8dd7ff56cacfe8e$export$b5a06d67000bbeb5);
$parcel$export(module.exports, "redDamask", () => $f8dd7ff56cacfe8e$export$bcb53fbf804a7b90);
$parcel$export(module.exports, "santaFe", () => $f8dd7ff56cacfe8e$export$4b4688d7feeaaf38);
$parcel$export(module.exports, "gimblet", () => $f8dd7ff56cacfe8e$export$9789d2fb6c87a325);
$parcel$export(module.exports, "sunFlower", () => $f8dd7ff56cacfe8e$export$87fc9c9bb4c08c73);
$parcel$export(module.exports, "amazon", () => $f8dd7ff56cacfe8e$export$72fcee9faf5b13f1);
$parcel$export(module.exports, "paradiso", () => $f8dd7ff56cacfe8e$export$8627d0b4e4b9ed9d);
$parcel$export(module.exports, "plantation", () => $f8dd7ff56cacfe8e$export$5d0d2d97768707c5);
$parcel$export(module.exports, "sanMarino", () => $f8dd7ff56cacfe8e$export$ce8b5216d133890e);
$parcel$export(module.exports, "chambray", () => $f8dd7ff56cacfe8e$export$a18413fd61dea429);
$parcel$export(module.exports, "stTropaz", () => $f8dd7ff56cacfe8e$export$25fd2218ba60772f);
$parcel$export(module.exports, "astronaut", () => $f8dd7ff56cacfe8e$export$98bda75c9fdf06ad);
$parcel$export(module.exports, "victoria", () => $f8dd7ff56cacfe8e$export$d760737f6ad10ed6);
$parcel$export(module.exports, "victoriaLight", () => $f8dd7ff56cacfe8e$export$8541564e66b1c847);
$parcel$export(module.exports, "eastBay", () => $f8dd7ff56cacfe8e$export$ddc173d79998167);
$parcel$export(module.exports, "eastBayDark", () => $f8dd7ff56cacfe8e$export$bf241b062c264e);
$parcel$export(module.exports, "revolver", () => $f8dd7ff56cacfe8e$export$1c2ec86d6c3dc060);
$parcel$export(module.exports, "cannonPink", () => $f8dd7ff56cacfe8e$export$84c2e62112df284e);
$parcel$export(module.exports, "woodyBrown", () => $f8dd7ff56cacfe8e$export$1fe4ef6c1d780e56);
$parcel$export(module.exports, "taupe", () => $f8dd7ff56cacfe8e$export$ded48bdfdd8466bd);
$parcel$export(module.exports, "pineCone", () => $f8dd7ff56cacfe8e$export$6f0e78acba6ee3e8);
$parcel$export(module.exports, "donkeyBrown", () => $f8dd7ff56cacfe8e$export$b5f2cf4ca111a231);
$parcel$export(module.exports, "wildBlueYonder", () => $f8dd7ff56cacfe8e$export$c65239d99c5e26b1);
$parcel$export(module.exports, "waikawaGrayEr", () => $f8dd7ff56cacfe8e$export$53400d936a0174e3);
$parcel$export(module.exports, "waikawaGray", () => $f8dd7ff56cacfe8e$export$c7340c44425adf25);
$parcel$export(module.exports, "santasGray", () => $f8dd7ff56cacfe8e$export$d618e9a1d641f7aa);
$parcel$export(module.exports, "scarpaFlow", () => $f8dd7ff56cacfe8e$export$9e0c9cd7d31c804c);
$parcel$export(module.exports, "oldLavender", () => $f8dd7ff56cacfe8e$export$7fbc8b72fc9e0522);
const $f8dd7ff56cacfe8e$export$c073df10e766abfa = "#000";
const $f8dd7ff56cacfe8e$export$8fa4e5556fd77a60 = "#FFF";
const $f8dd7ff56cacfe8e$export$f7692d85ac66a8a4 = "#BBB";
const $f8dd7ff56cacfe8e$export$8059f8fe64b146ae = "#333";
const $f8dd7ff56cacfe8e$export$2cf0ade8bd62135d = "#CBCBCB";
const $f8dd7ff56cacfe8e$export$57721355f82ccdfd = "#9B9B9B";
const $f8dd7ff56cacfe8e$export$ba81c7205efe8b46 = "#7C7C7C";
const $f8dd7ff56cacfe8e$export$d64defe8d8963bbf = "#575757";
const $f8dd7ff56cacfe8e$export$21703cf766d05540 = /*   0.0 100.0% 30.4% */ "#9B0000";
const $f8dd7ff56cacfe8e$export$377b85263d8a9ed3 = /*  21.8 100.0% 40.0% */ "#CC4A00";
const $f8dd7ff56cacfe8e$export$f93880688c8dbfa = /*  22.4 100.0% 50.0% */ "#FF5F00";
const $f8dd7ff56cacfe8e$export$8bd95c697f75d0ca = /*  43.1 100.0% 50.0% */ "#FFB700";
const $f8dd7ff56cacfe8e$export$a5974a494202a5c = /* 154.2 100.0% 26.9% */ "#00894E";
const $f8dd7ff56cacfe8e$export$1dd76555ec7c0af7 = /* 168.9 100.0% 26.5% */ "#00876E";
const $f8dd7ff56cacfe8e$export$7a1555d7a1069210 = /* 205.2  80.2% 50.6% */ "#1C91E6";
const $f8dd7ff56cacfe8e$export$b5a06d67000bbeb5 = /*  23.0  67.0% 45.1% */ "#C06126";
const $f8dd7ff56cacfe8e$export$bcb53fbf804a7b90 = /*  23.1  66.7% 54.1% */ "#D8783C";
const $f8dd7ff56cacfe8e$export$4b4688d7feeaaf38 = /*  26.3  44.9% 49.8% */ "#B87846";
const $f8dd7ff56cacfe8e$export$9789d2fb6c87a325 = /*  53.8  33.3% 54.1% */ "#B1A963";
const $f8dd7ff56cacfe8e$export$87fc9c9bb4c08c73 = /*  55.1  78.2% 51.4% */ "#E4D422";
const $f8dd7ff56cacfe8e$export$72fcee9faf5b13f1 = /* 159.7  33.7% 34.3% */ "#3A7561";
const $f8dd7ff56cacfe8e$export$8627d0b4e4b9ed9d = /* 172.1  46.3% 32.2% */ "#2C786E";
const $f8dd7ff56cacfe8e$export$5d0d2d97768707c5 = /* 173.0  37.4% 22.5% */ "#244F4A";
const $f8dd7ff56cacfe8e$export$ce8b5216d133890e = /* 209.3  43.0% 42.0% */ "#3D6C99";
const $f8dd7ff56cacfe8e$export$a18413fd61dea429 = /* 211.1  47.4% 33.5% */ "#2D547E";
const $f8dd7ff56cacfe8e$export$25fd2218ba60772f = /* 213.6  56.6% 37.1% */ "#295894";
const $f8dd7ff56cacfe8e$export$98bda75c9fdf06ad = /* 222.1  49.7% 30.4% */ "#273E74";
const $f8dd7ff56cacfe8e$export$d760737f6ad10ed6 = /* 250.3  32.3% 38.8% */ "#4E4383";
const $f8dd7ff56cacfe8e$export$8541564e66b1c847 = /* 250.4  32.4% 41.8% */ "#54488D";
const $f8dd7ff56cacfe8e$export$ddc173d79998167 = /* 250.4  31.7% 32.2% */ "#41386C";
const $f8dd7ff56cacfe8e$export$bf241b062c264e = /* 226.7  29.7% 35.7% */ "#404C76";
const $f8dd7ff56cacfe8e$export$1c2ec86d6c3dc060 = /* 258.0  33.3% 17.6% */ "#271E3C";
const $f8dd7ff56cacfe8e$export$84c2e62112df284e = /* 306.4  28.3% 38.8% */ "#7F4779";
const $f8dd7ff56cacfe8e$export$1fe4ef6c1d780e56 = /*   0.0  22.8% 22.4% */ "#462C2C";
const $f8dd7ff56cacfe8e$export$ded48bdfdd8466bd = /*  22.5  15.4% 20.4% */ "#3C322C";
const $f8dd7ff56cacfe8e$export$6f0e78acba6ee3e8 = /*  24.4  15.8% 39.6% */ "#756255";
const $f8dd7ff56cacfe8e$export$b5f2cf4ca111a231 = /*  40.0  19.6% 58.0% */ "#A99B7F";
const $f8dd7ff56cacfe8e$export$c65239d99c5e26b1 = /* 219.3  26.1% 58.6% */ "#7A8DB1";
const $f8dd7ff56cacfe8e$export$53400d936a0174e3 = /* 222.3  19.1% 45.1% */ "#5D6A89";
const $f8dd7ff56cacfe8e$export$c7340c44425adf25 = /* 223.9  23.9% 45.9% */ "#596891";
const $f8dd7ff56cacfe8e$export$d618e9a1d641f7aa = /* 248.6   3.7% 62.5% */ "#9D9CA3";
const $f8dd7ff56cacfe8e$export$9e0c9cd7d31c804c = /* 250.9   6.7% 32.4% */ "#4F4D58";
const $f8dd7ff56cacfe8e$export$7fbc8b72fc9e0522 = /* 300.0   5.8% 37.5% */ "#655A65";

});

parcelRegister("dCnO0", function(module, exports) {

var $530a8 = parcelRequire("530a8");

var $2wg2Z = parcelRequire("2wg2Z");

var $k1jEG = parcelRequire("k1jEG");

var $Sgg3l = parcelRequire("Sgg3l");
/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */ var $9ea14a41b85c41b9$var$sortBy = $k1jEG(function(collection, iteratees) {
    if (collection == null) return [];
    var length = iteratees.length;
    if (length > 1 && $Sgg3l(collection, iteratees[0], iteratees[1])) iteratees = [];
    else if (length > 2 && $Sgg3l(iteratees[0], iteratees[1], iteratees[2])) iteratees = [
        iteratees[0]
    ];
    return $2wg2Z(collection, $530a8(iteratees, 1), []);
});
module.exports = $9ea14a41b85c41b9$var$sortBy;

});
parcelRegister("2wg2Z", function(module, exports) {

var $hZHCL = parcelRequire("hZHCL");

var $27fE3 = parcelRequire("27fE3");

var $feefX = parcelRequire("feefX");

var $lRQaz = parcelRequire("lRQaz");

var $RKc7s = parcelRequire("RKc7s");

var $gHApq = parcelRequire("gHApq");

var $ko4jE = parcelRequire("ko4jE");

var $6L8aR = parcelRequire("6L8aR");

var $ciXjz = parcelRequire("ciXjz");
/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */ function $1d5b048f6c45e1f7$var$baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) iteratees = $hZHCL(iteratees, function(iteratee) {
        if ($ciXjz(iteratee)) return function(value) {
            return $27fE3(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
        return iteratee;
    });
    else iteratees = [
        $6L8aR
    ];
    var index = -1;
    iteratees = $hZHCL(iteratees, $gHApq($feefX));
    var result = $lRQaz(collection, function(value, key, collection) {
        var criteria = $hZHCL(iteratees, function(iteratee) {
            return iteratee(value);
        });
        return {
            "criteria": criteria,
            "index": ++index,
            "value": value
        };
    });
    return $RKc7s(result, function(object, other) {
        return $ko4jE(object, other, orders);
    });
}
module.exports = $1d5b048f6c45e1f7$var$baseOrderBy;

});
parcelRegister("RKc7s", function(module, exports) {
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */ function $0a18c89cb2bdc3df$var$baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while(length--)array[length] = array[length].value;
    return array;
}
module.exports = $0a18c89cb2bdc3df$var$baseSortBy;

});

parcelRegister("ko4jE", function(module, exports) {

var $iaOwL = parcelRequire("iaOwL");
/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */ function $ed79659dcf462f89$var$compareMultiple(object, other, orders) {
    var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
    while(++index < length){
        var result = $iaOwL(objCriteria[index], othCriteria[index]);
        if (result) {
            if (index >= ordersLength) return result;
            var order = orders[index];
            return result * (order == "desc" ? -1 : 1);
        }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
}
module.exports = $ed79659dcf462f89$var$compareMultiple;

});
parcelRegister("iaOwL", function(module, exports) {

var $8TI1c = parcelRequire("8TI1c");
/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */ function $d3b05ae2a1b33f2c$var$compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = $8TI1c(value);
        var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = $8TI1c(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
    }
    return 0;
}
module.exports = $d3b05ae2a1b33f2c$var$compareAscending;

});




parcelRegister("uxeiv", function(module, exports) {
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */ function $05bc9429fb9bef1f$var$compact(array) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (value) result[resIndex++] = value;
    }
    return result;
}
module.exports = $05bc9429fb9bef1f$var$compact;

});

parcelRegister("dcyLB", function(module, exports) {

var $fby3N = parcelRequire("fby3N");
/**
 * Gets all but the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */ function $027af51e3ae7c794$var$initial(array) {
    var length = array == null ? 0 : array.length;
    return length ? $fby3N(array, 0, -1) : [];
}
module.exports = $027af51e3ae7c794$var$initial;

});

parcelRegister("eHOmi", function(module, exports) {

var $ciXjz = parcelRequire("ciXjz");
/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */ function $ab4c2507e6441423$var$castArray() {
    if (!arguments.length) return [];
    var value = arguments[0];
    return $ciXjz(value) ? value : [
        value
    ];
}
module.exports = $ab4c2507e6441423$var$castArray;

});

parcelRegister("iAhJd", function(module, exports) {

var $dgFNr = parcelRequire("dgFNr");

var $e5c4h = parcelRequire("e5c4h");
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */ var $d879573c556b987d$var$pick = $e5c4h(function(object, paths) {
    return object == null ? {} : $dgFNr(object, paths);
});
module.exports = $d879573c556b987d$var$pick;

});
parcelRegister("dgFNr", function(module, exports) {

var $8CzuL = parcelRequire("8CzuL");

var $4vIET = parcelRequire("4vIET");
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */ function $9a8d30dec8175de6$var$basePick(object, paths) {
    return $8CzuL(object, paths, function(value, path) {
        return $4vIET(object, path);
    });
}
module.exports = $9a8d30dec8175de6$var$basePick;

});
parcelRegister("8CzuL", function(module, exports) {

var $27fE3 = parcelRequire("27fE3");

var $jLM3l = parcelRequire("jLM3l");

var $iE2OL = parcelRequire("iE2OL");
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */ function $646d67f8a58f3a49$var$basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while(++index < length){
        var path = paths[index], value = $27fE3(object, path);
        if (predicate(value, path)) $jLM3l(result, $iE2OL(path, object), value);
    }
    return result;
}
module.exports = $646d67f8a58f3a49$var$basePickBy;

});
parcelRegister("jLM3l", function(module, exports) {

var $8VDwZ = parcelRequire("8VDwZ");

var $iE2OL = parcelRequire("iE2OL");

var $hYaRS = parcelRequire("hYaRS");

var $j1nRE = parcelRequire("j1nRE");

var $aFWMl = parcelRequire("aFWMl");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */ function $e647ae7206e9a25c$var$baseSet(object, path, value, customizer) {
    if (!$j1nRE(object)) return object;
    path = $iE2OL(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while(nested != null && ++index < length){
        var key = $aFWMl(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) newValue = $j1nRE(objValue) ? objValue : $hYaRS(path[index + 1]) ? [] : {};
        }
        $8VDwZ(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
module.exports = $e647ae7206e9a25c$var$baseSet;

});



parcelRegister("e5c4h", function(module, exports) {

var $6MNix = parcelRequire("6MNix");

var $aCOlp = parcelRequire("aCOlp");

var $aIaaB = parcelRequire("aIaaB");
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */ function $a40ae4cb76b2d66d$var$flatRest(func) {
    return $aIaaB($aCOlp(func, undefined, $6MNix), func + "");
}
module.exports = $a40ae4cb76b2d66d$var$flatRest;

});
parcelRegister("6MNix", function(module, exports) {

var $530a8 = parcelRequire("530a8");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */ function $4f0d7755f81f87f3$var$flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? $530a8(array, 1) : [];
}
module.exports = $4f0d7755f81f87f3$var$flatten;

});



parcelRegister("iK0sn", function(module, exports) {

var $8VDwZ = parcelRequire("8VDwZ");

var $5EJJ7 = parcelRequire("5EJJ7");

var $4itIr = parcelRequire("4itIr");

var $31fkq = parcelRequire("31fkq");

var $8GxUO = parcelRequire("8GxUO");

var $jW7Yj = parcelRequire("jW7Yj");
/** Used for built-in method references. */ var $da4ce08d83cc5a4b$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $da4ce08d83cc5a4b$var$hasOwnProperty = $da4ce08d83cc5a4b$var$objectProto.hasOwnProperty;
/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */ var $da4ce08d83cc5a4b$var$assign = $4itIr(function(object, source) {
    if ($8GxUO(source) || $31fkq(source)) {
        $5EJJ7(source, $jW7Yj(source), object);
        return;
    }
    for(var key in source)if ($da4ce08d83cc5a4b$var$hasOwnProperty.call(source, key)) $8VDwZ(object, key, source[key]);
});
module.exports = $da4ce08d83cc5a4b$var$assign;

});
parcelRegister("4itIr", function(module, exports) {

var $k1jEG = parcelRequire("k1jEG");

var $Sgg3l = parcelRequire("Sgg3l");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function $320fe4c72ecfff5e$var$createAssigner(assigner) {
    return $k1jEG(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
        if (guard && $Sgg3l(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
module.exports = $320fe4c72ecfff5e$var$createAssigner;

});


parcelRegister("7qGmp", function(module, exports) {

module.exports = (parcelRequire("k3GTH"));

});
parcelRegister("k3GTH", function(module, exports) {

var $c0hyg = parcelRequire("c0hyg");

var $jW7Yj = parcelRequire("jW7Yj");
/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */ var $e9a55cf922dc54e4$var$toPairs = $c0hyg($jW7Yj);
module.exports = $e9a55cf922dc54e4$var$toPairs;

});
parcelRegister("c0hyg", function(module, exports) {

var $kP74O = parcelRequire("kP74O");

var $jdQIL = parcelRequire("jdQIL");

var $1M9wW = parcelRequire("1M9wW");

var $hxMGi = parcelRequire("hxMGi");
/** `Object#toString` result references. */ var $8bd319823c23feb0$var$mapTag = "[object Map]", $8bd319823c23feb0$var$setTag = "[object Set]";
/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */ function $8bd319823c23feb0$var$createToPairs(keysFunc) {
    return function(object) {
        var tag = $jdQIL(object);
        if (tag == $8bd319823c23feb0$var$mapTag) return $1M9wW(object);
        if (tag == $8bd319823c23feb0$var$setTag) return $hxMGi(object);
        return $kP74O(object, keysFunc(object));
    };
}
module.exports = $8bd319823c23feb0$var$createToPairs;

});
parcelRegister("kP74O", function(module, exports) {

var $hZHCL = parcelRequire("hZHCL");
/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */ function $f28e0f5c6527e347$var$baseToPairs(object, props) {
    return $hZHCL(props, function(key) {
        return [
            key,
            object[key]
        ];
    });
}
module.exports = $f28e0f5c6527e347$var$baseToPairs;

});

parcelRegister("hxMGi", function(module, exports) {
/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */ function $cc5b47c861fe445c$var$setToPairs(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = [
            value,
            value
        ];
    });
    return result;
}
module.exports = $cc5b47c861fe445c$var$setToPairs;

});




parcelRegister("2XZ0q", function(module, exports) {

$parcel$export(module.exports, "default", () => $229069efab5554ce$export$2e2bcd8739ae039);

var $a72Wq = parcelRequire("a72Wq");
function $229069efab5554ce$export$2e2bcd8739ae039(target, collection) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($a72Wq)))(collection, target);
}

});


parcelRegister("8uppp", function(module, exports) {

$parcel$export(module.exports, "setup", () => $2ea56442cbaa128a$export$de27182ff8187d6c);
$parcel$export(module.exports, "delivered", () => $2ea56442cbaa128a$export$3e1536f849888b99);
$parcel$export(module.exports, "restoreBags", () => $2ea56442cbaa128a$export$dd5a871039253ba4);
parcelRequire("j4fTH");
var $QjoqM = parcelRequire("QjoqM");
var $hWsJ2 = parcelRequire("hWsJ2");
var $IIOw7 = parcelRequire("IIOw7");

var $hMrfG = parcelRequire("hMrfG");

var $eub5I = parcelRequire("eub5I");

var $8wPVm = parcelRequire("8wPVm");

var $6MNix = parcelRequire("6MNix");

var $7f334 = parcelRequire("7f334");

var $17bKC = parcelRequire("17bKC");

var $bjBxN = parcelRequire("bjBxN");
function $2ea56442cbaa128a$export$de27182ff8187d6c([bag1, bag2, bag3], bot, players, rttn) {
    let dist, pick;
    const state = {
        bot: bot,
        players: players,
        rttn: rttn
    };
    state.neutral = $2ea56442cbaa128a$var$neutralBuildings();
    state.private = $2ea56442cbaa128a$var$privateBuildings(rttn);
    state.stationMasters = $2ea56442cbaa128a$var$stationMasterTiles(rttn);
    state.mediumTowns = $2ea56442cbaa128a$var$mediumTownTiles(rttn);
    [state.trail, dist, pick] = $2ea56442cbaa128a$var$setupBag1(bag1);
    bag1 = {
        bag: bag1,
        dist: dist,
        pick: pick
    };
    [state.bot_focus, state.market, dist, pick] = $2ea56442cbaa128a$var$setupBag2(bag2, bot, players);
    bag2 = {
        bag: bag2,
        dist: dist,
        pick: pick
    };
    [dist, pick] = $2ea56442cbaa128a$var$setupBag3(bag3);
    bag3 = {
        bag: bag3,
        dist: dist,
        pick: pick
    };
    state.foresight = $2ea56442cbaa128a$var$setupForesight(bag1, bag2, bag3);
    const bags = [
        bag1,
        bag2,
        bag3
    ];
    state.bags = $2ea56442cbaa128a$var$persistBags(bags);
    return [
        state,
        bags
    ];
}
function $2ea56442cbaa128a$var$neutralBuildings() {
    const [G, A] = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))([
        "G",
        "A"
    ], (x)=>x.charCodeAt(0));
    const nrNeutral = G + 1 - A;
    const neutral = (0, $QjoqM.randomPicks).take(nrNeutral);
    return (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(neutral, ([, n])=>String.fromCharCode(A + n));
}
function $2ea56442cbaa128a$var$privateBuildings(rttn) {
    const a = "a".charCodeAt(0);
    const n = rttn ? 13 : 12;
    const _private = (0, $hWsJ2.random)(1 << n);
    return (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))((0, (/*@__PURE__*/$parcel$interopDefault($7f334)))(n, (k)=>(_private & 1 << k) > 0), (x)=>String.fromCharCode(a + x));
}
function $2ea56442cbaa128a$var$stationMasterTiles(rttn) {
    const [n, m] = rttn ? [
        11,
        7
    ] : [
        9,
        5
    ];
    return (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))((0, $QjoqM.randomPicks).take(n, m), ([, k])=>k);
}
function $2ea56442cbaa128a$var$mediumTownTiles(rttn) {
    const n = 10, m = 6;
    // 5 alternatives all with weight 2 => 10 rsh 1
    return rttn ? (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))((0, $QjoqM.randomPicks).take(n, m), ([, k])=>k >>> 1) : [];
}
function $2ea56442cbaa128a$var$setupBag1(bag1) {
    const slots = {
        Flood: 4,
        Drought: 4,
        Rockslide: 4,
        Bandit: 10
    };
    const trail = {
        Flood: [],
        Drought: [],
        Rockslide: [],
        Bandit: []
    };
    let [sum, bagDist] = $2ea56442cbaa128a$var$createBagDist(bag1);
    let bagPick = (0, $QjoqM.randomPicks).create(sum);
    let picks = 7;
    while(picks > 0){
        const [[, k]] = bagPick(1);
        const item = bagDist(k);
        const { Type: Type } = item;
        if (slots[Type] > 0) {
            picks -= 1;
            item.Count -= 1;
            slots[Type] -= 1;
            trail[Type].push($2ea56442cbaa128a$var$pickItem(item));
        }
    }
    // Recreate in case we skipped any tiles
    [sum, bagDist] = $2ea56442cbaa128a$var$createBagDist(bag1);
    bagPick = (0, $QjoqM.randomPicks).create(sum);
    return [
        trail,
        bagDist,
        bagPick
    ];
}
function $2ea56442cbaa128a$var$setupBag2(bag2, bot, players) {
    const [sum, bagDist] = $2ea56442cbaa128a$var$createBagDist(bag2);
    const bagPick = (0, $QjoqM.randomPicks).create(sum);
    const bot_focus = bot ? (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))((0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bagPick(1), ([, k])=>k), (k)=>$2ea56442cbaa128a$var$pickItem(bagDist(k))) : [];
    const count = players * 2 - 1;
    const picks = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bagPick(count), ([, k])=>k);
    const market = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(picks, (k)=>$2ea56442cbaa128a$var$pickItem(bagDist(k)));
    return [
        bot_focus,
        market,
        bagDist,
        bagPick
    ];
}
function $2ea56442cbaa128a$var$setupBag3(bag3) {
    const [sum, bagDist] = $2ea56442cbaa128a$var$createBagDist(bag3);
    const bagPick = (0, $QjoqM.randomPicks).create(sum);
    return [
        bagDist,
        bagPick
    ];
}
function $2ea56442cbaa128a$var$setupForesight(bag1, bag2, bag3) {
    const picks1 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag1.pick(2), ([, k])=>k);
    const picks2 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag2.pick(2), ([, k])=>k);
    const picks3 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag3.pick(2), ([, k])=>k);
    const items1 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(picks1, (k)=>$2ea56442cbaa128a$var$pickItem(bag1.dist(k)));
    const items2 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(picks2, (k)=>$2ea56442cbaa128a$var$pickItem(bag2.dist(k)));
    const items3 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(picks3, (k)=>$2ea56442cbaa128a$var$pickItem(bag3.dist(k)));
    return $2ea56442cbaa128a$var$byRow(items1, items2, items3);
}
function $2ea56442cbaa128a$export$3e1536f849888b99(state, [bag1, bag2, bag3]) {
    const bags = [
        bag1,
        bag2,
        bag3
    ];
    const pick1 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag1.pick(1), ([n, k])=>[
            n === 0,
            k
        ]);
    const pick2 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag2.pick(1), ([n, k])=>[
            n === 0,
            k
        ]);
    const pick3 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag3.pick(1), ([n, k])=>[
            n === 0,
            k
        ]);
    if ((0, (/*@__PURE__*/$parcel$interopDefault($eub5I)))((0, (/*@__PURE__*/$parcel$interopDefault($8wPVm)))(pick1, pick2, pick3), ([n])=>n)) return [
        state,
        bags
    ];
    const item1 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(pick1, ([skip, k])=>skip ? null : $2ea56442cbaa128a$var$pickItem(bag1.dist(k)));
    const item2 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(pick2, ([skip, k])=>skip ? null : $2ea56442cbaa128a$var$pickItem(bag2.dist(k)));
    const item3 = (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(pick3, ([skip, k])=>skip ? null : $2ea56442cbaa128a$var$pickItem(bag3.dist(k)));
    state = {
        ...state,
        bags: $2ea56442cbaa128a$var$persistBags(bags),
        foresight: [
            ...state.foresight,
            ...$2ea56442cbaa128a$var$byRow(item1, item2, item3)
        ]
    };
    return [
        state,
        bags
    ];
}
function $2ea56442cbaa128a$var$pickItem(item) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($bjBxN)))(item, "Count");
}
function $2ea56442cbaa128a$var$byRow(...params) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($6MNix)))((0, (/*@__PURE__*/$parcel$interopDefault($17bKC)))(...params));
}
function $2ea56442cbaa128a$var$persistBags(bags) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bags, ({ bag: bag, pick: pick })=>({
            bag: bag,
            pick: pick.persist()
        }));
}
function $2ea56442cbaa128a$export$dd5a871039253ba4(bags) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bags, ({ bag: bag, pick: pick })=>{
        const [, dist] = $2ea56442cbaa128a$var$createBagDist(bag);
        pick = (0, $QjoqM.randomPicks).restore(pick);
        return {
            bag: bag,
            dist: dist,
            pick: pick
        };
    });
}
function $2ea56442cbaa128a$var$createBagDist(bag) {
    return (0, $IIOw7.distribution)((0, (/*@__PURE__*/$parcel$interopDefault($hMrfG)))(bag, (item)=>[
            ~~item.Count,
            item
        ]));
}

});
parcelRegister("j4fTH", function(module, exports) {
$parcel$export(module.exports, "random", () => (parcelRequire("hWsJ2")).random);
$parcel$export(module.exports, "randomPicks", () => (parcelRequire("QjoqM")).randomPicks);
$parcel$export(module.exports, "distribution", () => (parcelRequire("IIOw7")).distribution);
parcelRequire("hWsJ2");
parcelRequire("QjoqM");
parcelRequire("IIOw7");

});
parcelRegister("hWsJ2", function(module, exports) {

$parcel$export(module.exports, "random", () => $d0fe22b87ba3b083$export$4385e60b38654f68);
function $d0fe22b87ba3b083$export$4385e60b38654f68(min, max) {
    if (max == null) [min, max] = [
        0,
        min
    ];
    return min + $d0fe22b87ba3b083$var$nextInterval(max - min);
}
// "Fast Random Integer Generation in an Interval". See https://arxiv.org/abs/1805.10941 .
function $d0fe22b87ba3b083$var$nextInterval(s) {
    let [m, l] = $d0fe22b87ba3b083$var$mul32($d0fe22b87ba3b083$var$next32(), s);
    if (l < s) {
        const t = (0xFFFFFFFF - s + 1) % s; // -s % s
        while(l < t)[m, l] = $d0fe22b87ba3b083$var$mul32($d0fe22b87ba3b083$var$next32(), s);
    }
    return m;
}
const $d0fe22b87ba3b083$var$values = new Uint32Array(1);
function $d0fe22b87ba3b083$var$next32() {
    return crypto.getRandomValues($d0fe22b87ba3b083$var$values)[0];
}
function $d0fe22b87ba3b083$var$mul32(x, y) {
    const x0 = x & 0xFFFF;
    const x1 = x >>> 16;
    const y0 = y & 0xFFFF;
    const y1 = y >>> 16;
    const p00 = x0 * y0 >>> 0;
    const p01 = x0 * y1 >>> 0;
    const p10 = x1 * y0 >>> 0;
    const p11 = x1 * y1 >>> 0;
    const lo = Math.imul(x, y) >>> 0;
    const c = (p00 >>> 16) + (p01 & 0xFFFF) + (p10 & 0xFFFF) >>> 16;
    const hi = p11 + (p01 >>> 16) + (p10 >>> 16) + c >>> 0;
    return [
        hi,
        lo
    ];
}

});

parcelRegister("QjoqM", function(module, exports) {

$parcel$export(module.exports, "randomPicks", () => $09d3e67fb7fd3ce9$export$9e625b568301ae4a);

var $hWsJ2 = parcelRequire("hWsJ2");

var $iK0sn = parcelRequire("iK0sn");

var $dpp5R = parcelRequire("dpp5R");
const $09d3e67fb7fd3ce9$export$9e625b568301ae4a = {
    take: $09d3e67fb7fd3ce9$var$take,
    create: $09d3e67fb7fd3ce9$var$create,
    restore: $09d3e67fb7fd3ce9$var$restore
};
function $09d3e67fb7fd3ce9$var$take(n, m, random = (0, $hWsJ2.random)) {
    return $09d3e67fb7fd3ce9$var$create(n, random)(m);
}
function $09d3e67fb7fd3ce9$var$create(n, random = (0, $hWsJ2.random)) {
    return $09d3e67fb7fd3ce9$var$createPicks(n, null, random);
}
function $09d3e67fb7fd3ce9$var$restore(data, random = (0, $hWsJ2.random)) {
    const [k, entries] = data;
    return $09d3e67fb7fd3ce9$var$createPicks(k, entries, random);
}
function $09d3e67fb7fd3ce9$var$createPicks(k, entries, random) {
    const swap = new Map(entries);
    function pick(m) {
        if ((0, (/*@__PURE__*/$parcel$interopDefault($dpp5R)))(m) || m > k) m = k;
        return [
            ...next()
        ];
        function* next() {
            const end = k - m;
            while(k > end){
                const i = random(k);
                const j = k - 1;
                yield [
                    k,
                    swapOrIndex(swap, i)
                ];
                swap.set(i, swapOrIndex(swap, j));
                swap.delete(j);
                k -= 1;
            }
            function swapOrIndex(swap, i) {
                return swap.has(i) ? swap.get(i) : i;
            }
        }
    }
    function persist() {
        return [
            k,
            [
                ...swap.entries()
            ]
        ];
    }
    return (0, (/*@__PURE__*/$parcel$interopDefault($iK0sn)))(pick, {
        persist: persist
    });
}

});

parcelRegister("IIOw7", function(module, exports) {

$parcel$export(module.exports, "distribution", () => $0866df42ddfb861c$export$fd8e353f0040520a);

var $jqhs5 = parcelRequire("jqhs5");

var $lRrHl = parcelRequire("lRrHl");
function $0866df42ddfb861c$export$fd8e353f0040520a(events) {
    const [sum, samples] = (0, (/*@__PURE__*/$parcel$interopDefault($jqhs5)))(events, ([sum, acc], [weight, event])=>[
            sum + weight,
            [
                ...acc,
                [
                    sum + weight,
                    event
                ]
            ]
        ], [
        0,
        []
    ]);
    return [
        sum,
        sum === 0 ? ()=>null : (r)=>{
            // Add 1 to skip zero weight samples in the head of the array.
            const w = r + 1;
            const i = (0, (/*@__PURE__*/$parcel$interopDefault($lRrHl)))(samples, [
                w
            ], ([k])=>k);
            const [, event] = samples[i];
            return event;
        }
    ];
}

});
parcelRegister("lRrHl", function(module, exports) {

var $feefX = parcelRequire("feefX");

var $5eu7n = parcelRequire("5eu7n");
/**
 * This method is like `_.sortedIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
 * // => 0
 */ function $fea4087a9ddda72c$var$sortedIndexBy(array, value, iteratee) {
    return $5eu7n(array, value, $feefX(iteratee, 2));
}
module.exports = $fea4087a9ddda72c$var$sortedIndexBy;

});
parcelRegister("5eu7n", function(module, exports) {

var $8TI1c = parcelRequire("8TI1c");
/** Used as references for the maximum length and index of an array. */ var $3cf59f5d886eb936$var$MAX_ARRAY_LENGTH = 4294967295, $3cf59f5d886eb936$var$MAX_ARRAY_INDEX = $3cf59f5d886eb936$var$MAX_ARRAY_LENGTH - 1;
/* Built-in method references for those with the same name as other `lodash` methods. */ var $3cf59f5d886eb936$var$nativeFloor = Math.floor, $3cf59f5d886eb936$var$nativeMin = Math.min;
/**
 * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
 * which invokes `iteratee` for `value` and each element of `array` to compute
 * their sort ranking. The iteratee is invoked with one argument; (value).
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */ function $3cf59f5d886eb936$var$baseSortedIndexBy(array, value, iteratee, retHighest) {
    var low = 0, high = array == null ? 0 : array.length;
    if (high === 0) return 0;
    value = iteratee(value);
    var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = $8TI1c(value), valIsUndefined = value === undefined;
    while(low < high){
        var mid = $3cf59f5d886eb936$var$nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = $8TI1c(computed);
        if (valIsNaN) var setLow = retHighest || othIsReflexive;
        else if (valIsUndefined) setLow = othIsReflexive && (retHighest || othIsDefined);
        else if (valIsNull) setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        else if (valIsSymbol) setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        else if (othIsNull || othIsSymbol) setLow = false;
        else setLow = retHighest ? computed <= value : computed < value;
        if (setLow) low = mid + 1;
        else high = mid;
    }
    return $3cf59f5d886eb936$var$nativeMin(high, $3cf59f5d886eb936$var$MAX_ARRAY_INDEX);
}
module.exports = $3cf59f5d886eb936$var$baseSortedIndexBy;

});




parcelRegister("eub5I", function(module, exports) {

var $bs4aN = parcelRequire("bs4aN");

var $aZZpl = parcelRequire("aZZpl");

var $feefX = parcelRequire("feefX");

var $ciXjz = parcelRequire("ciXjz");

var $Sgg3l = parcelRequire("Sgg3l");
/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */ function $a8bc787ddc20a68c$var$every(collection, predicate, guard) {
    var func = $ciXjz(collection) ? $bs4aN : $aZZpl;
    if (guard && $Sgg3l(collection, predicate, guard)) predicate = undefined;
    return func(collection, $feefX(predicate, 3));
}
module.exports = $a8bc787ddc20a68c$var$every;

});
parcelRegister("bs4aN", function(module, exports) {
/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */ function $85658bee8fa87714$var$arrayEvery(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (!predicate(array[index], index, array)) return false;
    }
    return true;
}
module.exports = $85658bee8fa87714$var$arrayEvery;

});

parcelRegister("aZZpl", function(module, exports) {

var $jZgk9 = parcelRequire("jZgk9");
/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */ function $801f3c34627707cf$var$baseEvery(collection, predicate) {
    var result = true;
    $jZgk9(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
    });
    return result;
}
module.exports = $801f3c34627707cf$var$baseEvery;

});


parcelRegister("8wPVm", function(module, exports) {

var $dQ2xf = parcelRequire("dQ2xf");

var $530a8 = parcelRequire("530a8");

var $4HakK = parcelRequire("4HakK");

var $ciXjz = parcelRequire("ciXjz");
/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */ function $635996f8fb828840$var$concat() {
    var length = arguments.length;
    if (!length) return [];
    var args = Array(length - 1), array = arguments[0], index = length;
    while(index--)args[index - 1] = arguments[index];
    return $dQ2xf($ciXjz(array) ? $4HakK(array) : [
        array
    ], $530a8(args, 1));
}
module.exports = $635996f8fb828840$var$concat;

});

parcelRegister("17bKC", function(module, exports) {

var $k1jEG = parcelRequire("k1jEG");

var $eCu3e = parcelRequire("eCu3e");
/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */ var $0cff8f5a8a1e2326$var$zip = $k1jEG($eCu3e);
module.exports = $0cff8f5a8a1e2326$var$zip;

});
parcelRegister("eCu3e", function(module, exports) {

var $dH1to = parcelRequire("dH1to");

var $hZHCL = parcelRequire("hZHCL");

var $hnVmd = parcelRequire("hnVmd");

var $80UPN = parcelRequire("80UPN");

var $3u9A9 = parcelRequire("3u9A9");
/* Built-in method references for those with the same name as other `lodash` methods. */ var $aa4becd83f096e19$var$nativeMax = Math.max;
/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */ function $aa4becd83f096e19$var$unzip(array) {
    if (!(array && array.length)) return [];
    var length = 0;
    array = $dH1to(array, function(group) {
        if ($3u9A9(group)) {
            length = $aa4becd83f096e19$var$nativeMax(group.length, length);
            return true;
        }
    });
    return $80UPN(length, function(index) {
        return $hZHCL(array, $hnVmd(index));
    });
}
module.exports = $aa4becd83f096e19$var$unzip;

});


parcelRegister("bjBxN", function(module, exports) {

var $hZHCL = parcelRequire("hZHCL");

var $3ICzW = parcelRequire("3ICzW");

var $iVUXp = parcelRequire("iVUXp");

var $iE2OL = parcelRequire("iE2OL");

var $5EJJ7 = parcelRequire("5EJJ7");

var $bNkFh = parcelRequire("bNkFh");

var $e5c4h = parcelRequire("e5c4h");

var $gSnf2 = parcelRequire("gSnf2");
/** Used to compose bitmasks for cloning. */ var $83ce9787f6a54475$var$CLONE_DEEP_FLAG = 1, $83ce9787f6a54475$var$CLONE_FLAT_FLAG = 2, $83ce9787f6a54475$var$CLONE_SYMBOLS_FLAG = 4;
/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */ var $83ce9787f6a54475$var$omit = $e5c4h(function(object, paths) {
    var result = {};
    if (object == null) return result;
    var isDeep = false;
    paths = $hZHCL(paths, function(path) {
        path = $iE2OL(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
    });
    $5EJJ7(object, $gSnf2(object), result);
    if (isDeep) result = $3ICzW(result, $83ce9787f6a54475$var$CLONE_DEEP_FLAG | $83ce9787f6a54475$var$CLONE_FLAT_FLAG | $83ce9787f6a54475$var$CLONE_SYMBOLS_FLAG, $bNkFh);
    var length = paths.length;
    while(length--)$iVUXp(result, paths[length]);
    return result;
});
module.exports = $83ce9787f6a54475$var$omit;

});
parcelRegister("bNkFh", function(module, exports) {

var $aIbCM = parcelRequire("aIbCM");
/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */ function $89644cea63e030e6$var$customOmitClone(value) {
    return $aIbCM(value) ? undefined : value;
}
module.exports = $89644cea63e030e6$var$customOmitClone;

});
parcelRegister("aIbCM", function(module, exports) {

var $fOlXN = parcelRequire("fOlXN");

var $bmoyI = parcelRequire("bmoyI");

var $dYIQl = parcelRequire("dYIQl");
/** `Object#toString` result references. */ var $7cc707d0bd84b7d5$var$objectTag = "[object Object]";
/** Used for built-in method references. */ var $7cc707d0bd84b7d5$var$funcProto = Function.prototype, $7cc707d0bd84b7d5$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $7cc707d0bd84b7d5$var$funcToString = $7cc707d0bd84b7d5$var$funcProto.toString;
/** Used to check objects for own properties. */ var $7cc707d0bd84b7d5$var$hasOwnProperty = $7cc707d0bd84b7d5$var$objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var $7cc707d0bd84b7d5$var$objectCtorString = $7cc707d0bd84b7d5$var$funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function $7cc707d0bd84b7d5$var$isPlainObject(value) {
    if (!$dYIQl(value) || $fOlXN(value) != $7cc707d0bd84b7d5$var$objectTag) return false;
    var proto = $bmoyI(value);
    if (proto === null) return true;
    var Ctor = $7cc707d0bd84b7d5$var$hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && $7cc707d0bd84b7d5$var$funcToString.call(Ctor) == $7cc707d0bd84b7d5$var$objectCtorString;
}
module.exports = $7cc707d0bd84b7d5$var$isPlainObject;

});




parcelRegister("3hRtl", function(module, exports) {

var $3ICzW = parcelRequire("3ICzW");
/** Used to compose bitmasks for cloning. */ var $264c701ae2c9eeab$var$CLONE_DEEP_FLAG = 1, $264c701ae2c9eeab$var$CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function $264c701ae2c9eeab$var$cloneDeep(value) {
    return $3ICzW(value, $264c701ae2c9eeab$var$CLONE_DEEP_FLAG | $264c701ae2c9eeab$var$CLONE_SYMBOLS_FLAG);
}
module.exports = $264c701ae2c9eeab$var$cloneDeep;

});



//# sourceMappingURL=great-western-trail.1d0159ba.js.map
