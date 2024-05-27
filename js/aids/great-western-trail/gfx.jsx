import { Svg } from '../../gui';
import * as color from './colors';

import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import compact from 'lodash/compact';
import reduce from 'lodash/reduce';
import initial from 'lodash/initial';
import last from 'lodash/last';
import castArray from 'lodash/castArray';
import pick from 'lodash/pick';
import assign from 'lodash/assign';
import entries from 'lodash/entries';
import join from 'lodash/join';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import oneOf from '../../lodash/oneOf';

export function TrailPath(props) {
    return <Svg {...props} viewBox="0 0 72 72">
        <path d="m11 11h25l25 25h-50v25h50" fill="none" stroke={black} strokeWidth=".72" />
    </Svg>;
}

const bag = true;
const stationMaster = true;
const mediumTown = true;

export function BagTile({ type, kind, hand, ...props }) {
    return <Tile {...props} traits={{
        bag, [type]: true, kind, hand,
        hazzard: oneOf(type, ['Flood', 'Drought', 'Rockslide']),
    }} />;
}

export function StationMasterTile({ tile, ...props }) {
    return <Tile {...props} traits={{ stationMaster, tile }} />;
}

export function MediumTownTile({ tile, ...props }) {
    return <Tile {...props} traits={{ mediumTown, tile }} />;
}

const { white, black, gray_B } = color;

const textFill = color.white;
const textOutline = color.black;
const shieldGradiantStop1 = color.selectiveYellow;
const shieldGradiantStop2 = color.blazeOrange;
const cowboyBackground = color.sanMarino;
const builderBackground = color.cannonPink;
const engineerBackground = color.santaFe;
const handOutline = color.white;
const whiteHandFill = color.white;
const greenHandFill = color.tropicalRainForest;
const blackHandFill = color.black;
const advanceArrowFill = color.amazon;
const takeArrowFill = color.plantation;
const placeArrowFill = color.gimblet;
const shieldOutline = color.white;
const hazzardBackground = color.pineCone;
const hazzardSignBackground = color.taupe;
const hazzardSignOutline = color.white;
const cardBackground = color.santasGray;
const hornBrassFill = color.donkeyBrown;
const hornHandleFill = color.woodyBrown;
const coinFill = color.redDamask;
const coinOutline = color.piper;
const leftPlatformFill = color.waikawaGrayEr;
const rightPlatformFill = color.scarpaFlow;
const stationFill = color.silver;
const stationOutline = color.oldLavender;
const leftStationDiscFill = color.white;
const rightStationDiscFill = color.black;
const buildingFill = color.dustyGray;
const buildingOutline = color.boulder;
const buildingSilhuetteFill = color.black;
const buildingInnerFrameFill = color.gray_3;
const certificateOutline = color.white;
const certificateFill = color.victoria;
const certificateInnerOutline = color.eastBay;
const certificateInnerFill = color.victoriaLight;
const modelDarkSide = color.eastBayDark;
const modelMidSide = color.waikawaGray;
const modelLightSide = color.wildBlueYonder;
const mediumTownIconFill = color.chambray;
const mediumTownIconInner = color.white;
const mediumTownFrameFill = color.stTropaz;
const trashCardFill = color.astronaut;
const trashCrossFill = color.sangria;
const costReductionFill = color.paradiso;
const stationMasterFrameTopFill = color.stTropaz;
const stationMasterFrameBottomFill = color.revolver;
const banditGreenFill = color.deepSea;
const banditOrangeFill = color.burntOrange;
const floodFill = color.curiousBlue;
const rockSlideFill = color.scorpion;
const droughtFill = color.sunFlower;

// Todo: where is fillrule required?

function SansColonDef() {
    return <path id="sans-colon" d="m1.1 2.2537a0.55002 0.55002 0 0 1-0.55002 0.55002 0.55002 0.55002 0 0 1-0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002 0.55002zm0-1.7036a0.55002 0.55002 0 0 1-0.55002 0.55002 0.55002 0.55002 0 0 1-0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002-0.55002 0.55002 0.55002 0 0 1 0.55002 0.55002z"
        fill={textFill} fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".065003" style={{ paintOrder: 'stroke' }} />;
}
function SansOneDef() {
    return <path id="sans-one" d="m1.3262 0.0325h0.72376v5.6555h-0.89297v-3.9688c-0.31931 0.38758-0.67318 0.61935-1.1245 0.82682v-1.0914c0.658-0.3799 1.2937-1.1204 1.2937-1.4221z"
        fill={textFill} stroke={textOutline} strokeWidth=".065" />;
}
function SansTwoDef() {
    return <path id="sans-two" d="m0.079272 1.8278c0-0.65203 0.43341-1.7953 1.6439-1.7953 1.2105 0 1.4225 1.1688 1.4225 1.8201s-0.45728 1.2646-0.81734 1.6838-0.96568 1.0729-0.96568 1.0729h1.783v1.0421h-3.1132c0-0.64783 0.28859-1.1905 0.52276-1.5705 0.23418-0.38008 0.49877-0.71467 0.91441-1.1303 0.41564-0.41564 0.74016-0.97513 0.74016-1.2976 0-0.32245-0.12866-0.70595-0.48668-0.70843-0.35802-0.0025-0.70843 0.53597-0.70843 0.88324z"
        fill={textFill} stroke={textOutline} strokeWidth=".065" />;
}
function SansInfDef() {
    return <path id="sans-inf" d="m3.6006 0.70656c0.27379 0 0.49609 0.21274 0.49609 0.47969 0 0.26695-0.2223 0.48334-0.49609 0.48334s-0.70948-0.48334-0.70948-0.48334 0.43568-0.4797 0.70948-0.47969zm-2.4143 0.9595c-0.27379 0-0.49609-0.21285-0.49609-0.4798 0-0.26695 0.22879-0.48691 0.49609-0.48691s0.70947 0.48691 0.70947 0.48691-0.43568 0.4798-0.70947 0.4798zm2.4143 0.66121c0.59572 1e-6 1.141-0.51085 1.141-1.141 0-0.63017-0.5453-1.141-1.141-1.141-0.59572 0-1.2077 0.64847-1.2077 0.64847s-0.60509-0.64847-1.2067-0.64847-1.141 0.51085-1.141 1.141c0 0.63016 0.53945 1.141 1.141 1.141 0.60156 0 1.2085-0.65024 1.2085-0.65024s0.61014 0.65024 1.2059 0.65024z"
        fill={textFill} fillRule="evenodd" stroke={textOutline} strokeLinecap="round" strokeWidth=".090473" />;
}
function SansXDef() {
    return <path id="sans-x" d="m1.4986 2.996 0.50117 1.0267 0.94503 6.62e-4 -0.97376-1.9952 0.97413-1.9956h-0.94503l-0.50157 1.0275-0.50147-1.0275h-0.94503l0.97402 1.9955-0.97304 1.9934 0.94404 2e-3z"
        fill={textFill} stroke={textOutline} strokeWidth=".065" />;
}

function SerifTwoBaseDef() { return <path id="serif-two-base" d="m1.278 0c0.82 0 1.1417 0.56492 1.1417 1.1502s-0.43508 0.93038-0.76147 1.2562c-0.32639 0.32586-0.9874 0.65398-0.9874 0.65398h1.8729v0.83222h-2.5437c0-0.40978 0.1084-0.88723 0.52217-1.2831s0.63979-0.49137 0.84224-0.82345c0.20246-0.33208 0.29761-0.73273 0.07725-1.0167-0.22035-0.28398-0.5778-0.34962-0.5778-0.34962 0.18219 0.30342 0.14013 0.7088-0.17197 0.95682 0 0-0.58304-0.15647-0.51993-0.60543 0.06311-0.44896 0.286-0.77117 1.106-0.77117z" />; }
function SerifThreeBaseDef() { return <path id="serif-three-base" d="m2.279 0.98073c0.01891 0.52144-0.41965 0.89043-0.74605 0.89043 0.33115 0 0.90017 0.1328 0.90017 0.93283 0 0.80003-0.5816 1.09-1.3869 1.09-0.80525 0-1.0463-0.46874-1.0463-0.74261 0-0.27387 0.12699-0.45519 0.38711-0.45519 0.26011 0 0.38711 0.18559 0.38711 0.45519 0 0.2696-0.11433 0.37451-0.11433 0.37451 0.1591 0.1591 0.8857 0.1659 0.88449-0.67318-9.55e-4 -0.83908-0.51882-0.84163-0.65969-0.84163v-0.27994c0.14749 0 0.56939-0.09458 0.56804-0.7219-9.56e-4 -0.62732-0.65513-0.56965-0.65513-0.56965s0.07919 0.26751 0.07919 0.43261c0 0.1651-0.14793 0.45675-0.3536 0.45675s-0.38201-0.15954-0.38201-0.45675c0-0.29721 0.24663-0.87225 1.0113-0.87225 0.76465 0 1.1077 0.45929 1.1266 0.98073z" />; }
function SerifFiveBaseDef() { return <path id="serif-five-base" d="m0.45122 0h1.8841v0.82943l-1.7196 0.01138-0.12524 0.71728s0.32537-0.21022 0.89-0.21022c0.56463 0 1.1071 0.40548 1.1071 1.1778 0 0.77237-0.72142 1.3685-1.441 1.3685-0.7196 0-1.0465-0.54313-1.0465-0.88315s0.15242-0.48416 0.36022-0.48416 0.39056 0.14537 0.39056 0.47278-0.10618 0.42967-0.10618 0.42967c0.48936 0 0.65894-0.10476 0.79922-0.34774 0.14028-0.24297 0.09123-0.77249-0.01877-0.96301-0.11-0.19052-0.26776-0.34286-0.57191-0.34286s-0.6653 0.19782-0.6653 0.19782z" />; }

function SerifOneWhiteDef() {
    return <path id="serif-one-white" d="m0.24536 0.4266c0.43093-0.01601 0.90579-0.22414 0.90579-0.4151h0.47398v3.1295c0 0.28319 0.24334 0.4369 0.52618 0.4369v0.21632h-2.1398v-0.21632c0.37862 0 0.74836-0.15894 0.74836-0.4369v-2.3987h-0.51449z"
        fill={textFill} stroke={textOutline} strokeWidth=".023" />;
}

const SerifTwoWhiteDef = dependencies(SerifTwoBaseDef, function SerifTwoWhiteDef() {
    return <use id="serif-two-white" transform="translate(.011 .011)" fill={textFill} stroke={textOutline} strokeWidth=".022" xlinkHref="#serif-two-base" />;
});
const SerifThreeWhiteDef = dependencies(SerifThreeBaseDef, function SerifThreeWhiteDef() {
    return <use id="serif-three-white" transform="translate(.011 .011)" fill={textFill} stroke={textOutline} strokeWidth=".022" xlinkHref="#serif-three-base" />;
});
const SerifFiveWhiteDef = dependencies(SerifFiveBaseDef, function SerifFiveWhiteDef() {
    return <use id="serif-five-white" transform="translate(.011 .011)" fill={textFill} stroke={textOutline} strokeWidth=".022" xlinkHref="#serif-five-base" />;
});

function BagTileFrameDef() {
    return <rect id="bag-tile-frame" x=".403" y=".403" width="21.194" height="25.194" ry="3"
        fill={gray_B} fillRule="evenodd" stroke={black} strokeWidth=".806" />;
}

function LassoDef() {
    return <g id="lasso">
        <path d="m6.536 17.41c-2.1194-3.3094-2.7692-5.6962 0.050243-9.8593m1.0846-1.5069c2.5571-3.4311 3.1939-3.4839 4.5679-4.7915"
            fill="none" stroke={black} strokeLinecap="round" strokeWidth="1.1781" />
        <path d="m7.7108 6.0313c1.7172 0.026711 4.559 1.177 6.6532 1.3465 2.0942 0.1695 3.5021-1.6246 2.2441-3.4718-1.258-1.8472-5.2662-3.2606-8.1185-3.3134-2.8522-0.052825-4.9629 0.47759-6.4816 1.6105-1.5187 1.1329-1.6545 3.0243-1.1221 3.6038 0.53242 0.5795 1.8313 0.61441 2.9834 0.48843 1.152-0.12598 2.1242-0.29072 3.8414-0.26402z"
            fill="none" stroke={black} strokeWidth="1.1781" />
        <circle cx="12.1" cy="1.3583" r="1.2648" />
    </g>;
}
function HammerDef() { return <path id="hammer" d="m3.0299 1.832c-0.28987 0-2.7146 0.82976-3.0299 0.82903v-0.66526s2.5385-1.995 3.0299-1.995c0.28914 6.97e-4 2.4588 0.01087 3.998 0.01087 0 0 0.38625 0.74352 0.89353 0.74352 0.50872 0 0.88773-0.75511 0.88773-0.75511 0.54134 6.97e-4 0.88266 0 0.88266 0 0.38263 0.0015 0.54133 0.43094 0.54133 0.89908v0.89908c-0.0014 0.46959-0.16015 0.89908-0.54133 0.89908l-0.88266 0.0072s-0.34205-0.73482-0.88773-0.70511c-0.76096 0.11995-1.2979 0.94473-1.2979 1.5537v13.712c7.21e-4 0.77178-0.51238 0.7341-1.1436 0.73482-0.63192 0-1.1428 0.0355-1.1435-0.73482 0 0-0.0044-11.065 0-13.712 0-0.57722-0.70303-1.6577-1.3066-1.7211z" />; }
function WrenchDef() { return <path id="wrench" d="m2.5725 4.1863 2.1125 0.0532 1.6839-2.0639c0.29425 0.68678 0.49978 2.2917-0.72283 3.3141-0.31824 0.34245-1.3496 1.0353-1.6421 1.6318-0.37902 0.79784-0.33476 0.86871-0.34897 2.8382v7.3049c0 0.77987-0.5298 0.73481-1.1638 0.73481-0.63396 5e-6 -1.1233 0.02459-1.1233-0.73481v-9.7287c0.0052-0.79202-0.32634-1.7826-0.80902-2.4289-0.78091-1.1615-0.76089-2.7572 0.17143-3.9 0.75156-0.92118 2.0014-1.3581 3.0055-1.1604l-1.6649 2.0406z" />; }

const CowboyDef = dependencies(LassoDef, function CowboyDef() {
    return <g id="cowboy">
        <rect width="22" height="26" ry="3.096" fill={cowboyBackground} fillRule="evenodd" />
        <use transform="translate(2.1698 4.0004)" xlinkHref="#lasso" />
    </g>;
});

const BuilderDef = dependencies(HammerDef, function BuilderDef() {
    return <g id="builder">
        <rect width="22" height="26" ry="3.096" fill={builderBackground} fillRule="evenodd" />
        <use transform="translate(5.8835 4.0002)" xlinkHref="#hammer" />
    </g>;
});

const EngineerDef = dependencies(WrenchDef, function EngineerDef() {
    return <g id="engineer">
        <rect width="22" height="26" ry="3.096" fill={engineerBackground} fillRule="evenodd" />
        <use transform="translate(7.7033 4.0001)" xlinkHref="#wrench" />
    </g>;
});

function RevolverBaseDef() {
    return <path id="revolver-base" d="m1.7311 2.3055-0.458-0.458c-0.03421-0.034189-0.08963-0.034189-0.12382 0l-0.53642 0.53642c-0.03325 0.037025-0.03144 0.091376 0 0.12378l0.458 0.458c0.03708 0.033615 0.09193 0.030919 0.12383 0l0.53642-0.53642c0.03325-0.037025 0.03144-0.091386-1.1e-5 -0.12379zm-0.66024 0.41258-0.2104-0.2104c-0.03066-0.030667-0.03064-0.093143 0-0.12379l0.29812-0.29811c0.03052-0.030516 0.07457-0.030629 0.1052 0 0.03058 0.030587 0.0305 0.074701-1e-6 0.1052l-0.23994 0.23993c-0.03419 0.034189-0.03419 0.089606 0 0.1238 0.03708 0.033615 0.09193 0.03092 0.12383 0l0.23993-0.23993c0.02995-0.029945 0.07437-0.030833 0.1052 0 0.03049 0.030493 0.03059 0.07461 0 0.1052l-0.29812 0.29811c-0.03074 0.030742-0.09315 0.030674-0.12383 0zm2.1385-2.3232c0-0.023217-0.0092-0.045485-0.02563-0.061893l-0.30739-0.30739c-0.0342-0.034189-0.08962-0.034189-0.12381 0l-0.11576 0.11576-0.04617-0.046172c-0.0342-0.034189-0.08962-0.034189-0.12381 0-0.03419 0.034189-0.03419 0.089617 0 0.12381l0.04617 0.046172-1.2008 1.2008c-0.01606-0.014503-0.03689-0.022654-0.0586-0.022654-0.02322 0-0.04547 0.00922-0.06191 0.025641l-0.96484 0.96484c-0.01641 0.016409-0.02563 0.038687-0.02563 0.061893s0.0092 0.045485 0.02563 0.061893c0.03308 0.033075 0.06099 0.069919 0.0836 0.10945-0.11932 0.028465-0.22518 0.10047-0.29547 0.20456-0.02705 0.040072-0.0165 0.094489 0.02357 0.12155 0.01502 0.010142 0.03206 0.015005 0.04891 0.015005 0.02811 0 0.05571-0.013506 0.07264-0.038551 0.04919-0.072845 0.1253-0.1214 0.21024-0.13625 0.0051 0.029285 0.0078 0.059175 0.0078 0.089512 0 0.13798-0.05374 0.26769-0.10435 0.31842-0.05061 0.050727-0.09211 0.096503-0.13798 0.12403-0.04056 0.024319-0.05445 0.076468-0.03139 0.11775 0.03399 0.060872 0.01448 0.17333-0.0027 0.27255-0.01013 0.058416-0.01971 0.1136-0.0201 0.16358-0.0032 0.41338 0.19492 0.77543 0.73123 1.3359 0.04579 0.047848 0.10743 0.074583 0.17437 0.074958 0.06694 3.621e-4 0.1279-0.024864 0.17391-0.070856l0.51936-0.51937c0.04181-0.041821 0.06322-0.099622 0.05871-0.15858-0.0045-0.059081-0.03452-0.11309-0.08235-0.14818-0.2945-0.21609-0.57956-0.51243-0.49764-0.69684 0.01889-0.03799 0.10141-0.090918 0.1718-0.1258 0.05228 0.031867 0.11264 0.049805 0.19324 0.050289 0.0806 4.531e-4 0.17137-0.038223 0.23639-0.10617l0.16104-0.1683c0.16081-0.16807 0.16371-0.43409 0.0066-0.60564-0.0087-0.00946-0.04444-0.063839-0.04444-0.084848 0-0.029107 0.01134-0.05649 0.03192-0.077082l0.21275-0.21275c0.03419-0.034189 0.03419-0.089606 0-0.1238l-0.26122-0.26124 0.84038-0.84041c0.03419-0.034189 0.03419-0.089606 0-0.1238-0.0342-0.034189-0.08962-0.034189-0.10671-0.017093l0.58275-0.58271c0.01642-0.016417 0.02563-0.038687 0.02563-0.061903zm-1.4141 2.8702-0.16104 0.1683c-0.03316 0.03465-0.07822 0.053408-0.12573 0.052606-0.04794-7.174e-4 -0.09202-0.020729-0.12411-0.056343-0.04381-0.048629-0.06452-0.10981-0.0626-0.17028 0.04594 0.019928 0.09545 0.030285 0.14547 0.030285 0.04641 0 0.09324-0.00884 0.13802-0.027004 0.0448-0.018188 0.06638-0.069243 0.04819-0.11404-0.01818-0.044788-0.0692-0.06638-0.11404-0.048192-0.04892 0.019845-0.1025 0.018346-0.14895-0.00208l0.21108-0.20543c0.02598-0.025218 0.05988-0.038947 0.09876-0.038369 0.03888 5.664e-4 0.07354 0.016455 0.09892 0.044178 0.09507 0.10377 0.09331 0.26469-4e-3 0.36635z"
        fillRule="evenodd" style={{ paintOrder: 'stroke' }} />;
}

function HandBaseDef() { return <path id="hand-base" d="m0.85913 0.22666c0.03662-0.06438 0.09033-0.08467 0.1396-0.08503 0.04927-3.64e-4 0.12077 0.06077 0.14164 0.14048 0.02088 0.07971 0.01938 0.21505 0.01333 0.36577-0.0061 0.15072-0.0028 0.15258-0.01226 0.35973 0.02818 0.21688 0.02748 0.25545 0.08888 0.45279 0.04636-0.12348 0.04467-0.16839 0.04778-0.19073 0.0031-0.02234 0.01739-0.11313 0.05988-0.17726 0.0425-0.06413 0.09918-0.08525 0.18352-0.06531s0.11519 0.0493 0.13491 0.12083c0.01674 0.06074-0.01056 0.22697-0.02426 0.30867-0.04124 0.13457-0.02543 0.03477-0.14023 0.44985-0.06938 0.11902-0.17674 0.30364-0.30894 0.40354-0.1322 0.0999-0.25593 0.13006-0.46593 0.07077-0.11905 0.02256-0.32203 0.04884-0.43-0.0737-0.10796-0.12254-0.17094-0.264-0.19972-0.47917-0.02879-0.21517-0.0225-0.46983-0.01464-0.56127 0.0018-0.09528-0.0795-0.47321-0.07224-0.60224 0.0073-0.12903 0.0656-0.16526 0.11265-0.18266 0.04706-0.01739 0.12114-1.25e-4 0.16394 0.06724l0.04761 0.48127c-0.0085-0.06993-0.03583-0.32463-0.04754-0.48128-0.0117-0.15665-0.01452-0.23869-0.0067-0.26984 0.01914-0.07622 0.04977-0.11772 0.12865-0.1267 0.07888-9e-3 0.13415 0.04095 0.1735 0.11846l0.0086 0.67424s-0.01017-0.57925-0.0086-0.67424c0.0015-0.09499-0.01007-0.14551 0.01088-0.18815 0.02094-0.04264 0.06885-0.08271 0.13673-0.08273 0.06788-1.6997e-5 0.12176 0.06298 0.13162 0.09935 0.0099 0.03637 0.0066 0.065 0.0074 0.1273 8.9e-4 0.0623-0.01705 0.71788-0.01705 0.71788z" />; }

const HandDef = dependencies(HandBaseDef, function HandDef({ hand }) {
    const [id, fill]
        = hand === 'Green' ? ['hand-green', greenHandFill]
        : hand === 'Black' ? ['hand-black', blackHandFill]
        : hand === 'White' ? ['hand-white', whiteHandFill]
        : ['', ''];
    return <use id={id} transform="translate(.041563 .0415)" xlinkHref="#hand-base"
        fill={fill} stroke={handOutline} strokeLinejoin="round" strokeWidth=".083" />;
});

function AdvanceArrowDef() {
    return <path id="advance-arrow" d="m0.1325 1.8137v-1.6812l2.256 1.543 2.256-1.543v1.6812l-2.256 1.5553z"
        fill={advanceArrowFill} stroke={white} strokeLinejoin="round" strokeWidth=".265" />;
}

function TakeArrowDef() {
    return <path id="take-arrow" d="m0.031671 2.7571c0.22573-0.98016 0.6782-1.8001 1.7417-2.1597l-0.03949-0.54235 1.4606 0.7405-1.3212 1.1747-0.05311-0.72932c-0.9868 0.30595-1.298 0.94751-1.7885 1.5162z"
        fill={takeArrowFill} stroke={black} strokeWidth=".065" />;
}

function PlaceArrowDef() {
    return <path id="place-arrow" d="m0.0067851 0.032328c0.81401 0.08404 1.6389-0.3145 2.3805 1.0142l0.3089-0.16062-0.04678 1.4149-1.1711-0.78155 0.39173-0.2037c-0.23998-0.67185-0.90628-1.0789-1.8632-1.2832z"
        fill={placeArrowFill} stroke={black} strokeWidth=".065" />;
}

function ShieldDef() {
    return <>
        <linearGradient id="shield-gradient" x1="113.88" x2="168.43" y1="196.63" y2="196.62"
            gradientTransform="matrix(.11349 0 0 .11349 -12.924 -18.574)" gradientUnits="userSpaceOnUse">
            <stop stopColor={shieldGradiantStop1} offset="0" />
            <stop stopColor={shieldGradiantStop2} offset="1" />
        </linearGradient>
        <path id="shield" d="m1.2413 0.79082c-0.59806 0.30988-1.0634 0.61956-1.0634 0.61956l0.12953 1.5333 0.12953 1.5333c0.04684 0.53152 0.46947 1.1231 1.002 1.6384 0.53254 0.51531 1.175 0.95436 1.6616 1.1809 0.48658-0.22645 1.1291-0.66544 1.6617-1.1807 0.53259-0.51525 0.95527-1.1068 1.0022-1.6383l0.12968-1.5333 0.12968-1.5333s-0.46535-0.30972-1.0634-0.61966c-0.59804-0.30994-1.3288-0.62098-1.8595-0.621-0.53073-2.66e-5 -1.2615 0.31094-1.8595 0.62082z"
            fill="url(#shield-gradient)" stroke={shieldOutline} strokeWidth=".34" />
    </>;
}

// Todo: 3 has an extra vector node at the top left
const ShieldVpDef = dependencies(ShieldDef, function ShieldVpDef({ value }) {
    return <g id={`vp-${value}`}>
        <use xlinkHref="#shield" />
        <path d={{
            '0': 'm3.1745 2.0931c0.46034 0.020085 0.60946 0.78851 0.58938 1.2489-0.02009 0.46034-0.23694 1.2153-0.69728 1.1952-0.46034-0.020085-0.60946-0.78851-0.58938-1.2489 0.02009-0.46034 0.23694-1.2153 0.69728-1.1952zm0.0092-0.43093c0.53385 0.030068 1.0228 0.35564 1.2424 0.84172 0.21961 0.48608 0.15104 1.4124-0.11988 1.8386-0.27091 0.42617-0.7466 0.58956-1.2143 0.58924-0.46767-3.172e-4 -0.94309-0.19531-1.2195-0.64126-0.27644-0.44595-0.31971-1.3456-0.05397-1.8423 0.26574-0.4967 0.83142-0.81605 1.3653-0.78598z',
            '1': 'm2.2924 1.7068 1.2116 9.044e-4 -0.0021 2.7729 0.40343 3.012e-4 -3.02e-4 0.4043-1.5253-0.00114 3.02e-4 -0.4043 0.30722 2.293e-4 0.0017-2.3216-0.39689-2.963e-4z',
            '2': 'm1.793 2.4057c0.22852-0.47113 0.66047-0.75128 1.3278-0.74518 0.66732 0.00613 1.2918 0.37189 1.3018 1.0769 0.01 0.70503-0.56535 0.88607-0.88342 1.0096-0.31806 0.12356-0.48149 0.13204-0.68646 0.30716-0.20498 0.17511-0.23183 0.21946-0.23511 0.45865l1.7741 0.00132-3.12e-4 0.41753-2.3046-0.00172c-0.22962 0.013623-0.34913-0.16385-0.29513-0.35614 0.05234-0.18636 0.19239-0.78745 0.95972-1.1005 0.76732-0.31309 0.76426-0.40677 0.85524-0.62522 0.09098-0.21845 0.0021-0.67594-0.45334-0.75232-0.45545-0.076385-0.80868 0.64061-0.80868 0.64061z',
            '3': 'm2.1291 1.8117c0.19086-0.13624 0.64149-0.20853 1.0901-0.1802 0.44862 0.028323 0.82788 0.12671 0.98591 0.50721 0.15803 0.3805 0.0015 0.63224-0.06263 0.71611-0.06412 0.083878-0.33315 0.20814-0.33315 0.20814 0.19888 0.093902 0.45143 0.19186 0.56787 0.38586 0.11643 0.19401 0.17724 0.33695 0.15714 0.69698-0.02009 0.36003-0.2541 0.55327-0.50054 0.65114-0.24644 0.097877-0.64251 0.18818-0.98062 0.16614-0.33811-0.022041-0.50494-0.015827-0.91617-0.2235-0.41122-0.20767-0.4008-0.38491-0.47435-0.56518l0.6733-0.27286c0.04792 0.17802 0.12025 0.47165 0.40983 0.61928 0.28958 0.14764 0.62006 0.01128 0.73541-0.09664 0.11535-0.10792 0.2439-0.28098 0.24934-0.50867 0.0055-0.22769-0.17229-0.42203-0.3559-0.51655-0.18361-0.094518-0.39707-0.11961-0.70362-0.081701l-0.03822-0.37298s0.37741-0.011506 0.59037-0.05725c0.21296-0.045736 0.38148-0.11489 0.37715-0.44019-0.0043-0.3253-0.28053-0.40593-0.4104-0.42188-0.12988-0.015947-0.24675 0.0012-0.36838 0.026596-0.12163 0.025377-0.15131 0.063908-0.16608 0.12405-0.01477 0.060143 0.0722 0.12941 0.05934 0.16476-0.01287 0.035345-0.09357 0.072924-0.25009 0.062545-0.15652-0.010379-0.21338-0.20258-0.33555-0.24026-0.12217-0.037681-0.24287-0.1899-7.9e-5 -0.35097 0.24281-0.16108 2e-6 1.06e-5 2e-6 1.06e-5z',
            '4': 'm2.4874 2.1526 0.5177 3.864e-4 -0.58043 1.5951 0.90438 6.751e-4 0.00152-2.0412 0.74676 5.574e-4 -0.00152 2.0412 0.20156 1.504e-4 -3.659e-4 0.4903-0.20156-0.00496-4.855e-4 0.65043-0.74676-5.574e-4 5.04e-4 -0.67522-1.4865-0.062316c-0.1588-0.028012-0.20872-0.16662-0.10198-0.39549z',
        }[value] || ''}
            fill={textFill} fillRule="evenodd" stroke={textOutline} strokeWidth=".023" />
    </g>;
});

const ShieldHazzard = dependencies([ShieldVpDef, ['value']], function ShieldHazzard({ value }) {
    return <use transform="matrix(1.2093 0 0 1.2093 12.389 14.751)" xlinkHref={`#vp-${value}`} />;
});

const WorkerDef = dependencies(BagTileFrameDef, LassoDef, HammerDef, WrenchDef, function WorkerDef() {
    return <g id="worker">
        <use transform="scale(.27335)" xlinkHref="#bag-tile-frame" />
        <use transform="matrix(.19612 0 0 .19612 2.1016 .60395)" xlinkHref="#lasso" />
        <use transform="matrix(.19611 0 0 .19611 .50503 2.5313)" xlinkHref="#hammer" />
        <use transform="matrix(.19611 0 0 .19611 3.745 2.973)" xlinkHref="#wrench" />
    </g>;
});

const HazzardDef = dependencies([HandDef, { hand: 'White' }], function HazzardDef() {
    return <g id="hazzard">
        <rect width="5.8796" height="7.1068" ry=".8" fill={hazzardBackground} style={{ paintOrder: 'stroke' }} />
        <path d="m3.2707 5.1054-0.19922 0.023438 0.24845 1.9779h0.20046z"
            fill={hazzardSignBackground} />
        <rect transform="rotate(-7.1401)" x=".95441" y="1.7542" width="3.1116" height="3.7172" ry=".15"
            fill={hazzardSignBackground} stroke={hazzardSignOutline} strokeLinecap="round" strokeLinejoin="round" strokeWidth=".365" style={{ paintOrder: 'stroke' }} />
        <use transform="rotate(-11.47 11.933 -8.2639)" xlinkHref="#hand-white" />
    </g>;
});

const HazzardTakeDef = dependencies(HazzardDef, TakeArrowDef, function HazzardTakeDef() {
    return <g id="hazzard-take">
        <use transform="translate(0 1.111)" xlinkHref="#hazzard" />
        <use transform="translate(4.8306)" xlinkHref="#take-arrow" />
    </g>;
});

function ObjectiveDef() {
    return <g id="objective">
        <rect x=".031505" y=".031505" width="4.562" height="7.039" ry=".40002"
            fill={cardBackground} stroke={black} strokeLinecap="round" strokeLinejoin="round" strokeWidth=".06301" style={{ paintOrder: 'stroke' }} />
        <path d="m3.0595 3.2701 0.80974 0.1057-0.035076 0.26871-0.35411-0.05725"
            fill={hornBrassFill} stroke={black} strokeWidth=".067054" style={{ paintOrder: 'stroke' }} />
        <path d="m1.9808 3.3449c-0.48716-0.07296-0.55536 0.11946-0.5773 0.25517s0.076937 0.39095 0.33356 0.43244l1.1686 0.18894c0.31055 0.05021 0.52281-0.0821 0.57389-0.39806 0.051084-0.31596-0.1097-0.51273-0.42008-0.55325l-1.2051-0.15731c-0.36442-0.047571-0.67507-0.4154-0.88634-0.64205l-0.2046 1.2085c0.2652-0.1616 0.69497-0.41883 1.0882-0.35526l1.1686 0.18894c0.15754 0.02547 0.17111 0.17276 0.15806 0.26851-0.013054 0.09574-0.076769 0.22097-0.23311 0.19569l-1.0394-0.16805c-0.12923-0.02089-0.21875-0.11107-0.19486-0.25878 0.023882-0.1477 0.14044-0.22481 0.26992-0.20542"
            fill={hornBrassFill} stroke={black} strokeWidth=".067054" style={{ paintOrder: 'stroke' }} />
        <path d="m2.9452 3.9771-0.039498 0.24429-1.0394-0.16805 0.039498-0.24429z"
            fill={hornHandleFill} />
    </g>;
}

function CattleDef() {
    return <g id="cattle">
        <rect x=".031501" y=".031504" width="4.5621" height="7.0386" ry=".4"
            fill={cardBackground} stroke={black} strokeLinecap="round" strokeLinejoin="round" strokeWidth=".063009" style={{ paintOrder: 'stroke' }} />
        <path d="m0.33642 1.5956v3.999s1.1289-0.6665 1.9761-0.6665c0.84718-1e-6 1.9761 0.6665 1.9761 0.6665v-3.999s-1.1256 0.44434-1.9761 0.44434c-0.85055-1e-6 -1.9761-0.44434-1.9761-0.44434z"
            fill="none" stroke={black} strokeWidth=".065" />
    </g>;
}

const Cattle3to5Def = dependencies(CattleDef, SerifThreeBaseDef, SerifFiveBaseDef, function Cattle3to5Def() {
    return <g id="cattle-3-5">
        <use xlinkHref="#cattle" />
        <use transform="matrix(.57652 0 0 .57652 .589 2.3333)" fill={black} xlinkHref="#serif-three-base" />
        <rect x="2.1169" y="3.4202" width=".53131" height=".23331" />
        <use transform="matrix(.5765 0 0 .5765 2.6506 2.355)" fill={black} xlinkHref="#serif-five-base" />
    </g>;
});

const CattleTake3Def = dependencies(CattleDef, SerifThreeBaseDef, TakeArrowDef, function CattleTake3Def() {
    return <g id="cattle-take-3">
        <use transform="matrix(1.0001 0 0 1.0001 4.0635e-6 8.624e-8)" xlinkHref="#cattle" />
        <use transform="matrix(.57652 0 0 .57652 1.6113 2.3335)" fill={black} xlinkHref="#serif-three-base" />
        <use transform="matrix(.96395 0 0 .96395 3.7361 .40133)" xlinkHref="#take-arrow" />
    </g>;
});

function CoinDef() {
    return <path id="coin" d="m7.0533 4.2996a2.7533 2.7533 0 0 1-2.7533 2.7533 2.7533 2.7533 0 0 1-2.7533-2.7533 2.7533 2.7533 0 0 1 2.7533-2.7533 2.7533 2.7533 0 0 1 2.7533 2.7533zm1.3967 0a4.15 4.1496 0 0 1-4.15 4.1496 4.15 4.1496 0 0 1-4.15-4.1496 4.15 4.1496 0 0 1 4.15-4.1496 4.15 4.1496 0 0 1 4.15 4.1496z"
        fill={coinFill} stroke={coinOutline} strokeLinecap="round" strokeWidth=".3" />;
}

function StationDef() {
    return <g id="station">
        <rect x="1.0544" y="0" width="1.5915" height="1.076"
            fill={leftPlatformFill} style={{ paintOrder: 'stroke' }} />
        <rect x="2.6478" y="0" width="1.5915" height="1.076"
            fill={rightPlatformFill} style={{ paintOrder: 'stroke' }} />
        <rect x=".14562" y="1.0735" width="5.0048" height="5.0048"
            fill={stationFill} stroke={stationOutline} strokeLinejoin="round" strokeWidth=".29124" style={{ paintOrder: 'stroke' }} />
        <path d="m1.5844 5.7239c-0.47014-0.23274-0.85098-0.61322-1.0842-1.0831v1.0831zm-1.0842-3.2127c0.23319-0.46992 0.61403-0.8504 1.0842-1.0831h-1.0842z"
            fill={leftStationDiscFill} />
        <path d="m2.6478 1.076v5.0023"
            fill="none" stroke={black} strokeWidth=".065" />
        <path d="m3.714 1.428c0.4692 0.23284 0.84926 0.6129 1.0821 1.0821v-1.0821zm1.0821 3.2117c-0.23301 0.4703-0.61387 0.85117-1.0842 1.0842h1.0842z"
            fill={rightStationDiscFill} />
    </g>;
}

function BuildingDef() {
    return  <g id="building">
        <rect x=".385" y=".385" width="5.9379" height="5.9379"
            fill={buildingFill} stroke={buildingOutline} strokeLinejoin="round" strokeWidth=".77" style={{ paintOrder: 'stroke' }} />
        <path d="m5.3797 5.3631v-0.12816l-0.14469-0.12816v-2.4309l0.38447-0.39688-2.3027-1.1576-2.3027 1.1576 0.38447 0.39688v2.4309l-0.14469 0.12816v0.12816zm-1.3643-2.2655v2.0092h0.85163v-2.497h-3.1006v2.497h0.85163v-2.0092z"
            fill={buildingSilhuetteFill} fillRule="evenodd" />
        <path d="m0.94429 0.385c0 0.30873-0.25027 0.559-0.559 0.559v-0.559z"
            fill={buildingOutline} />
        <circle cx=".38529" cy=".385" r=".19792"
            fill={buildingInnerFrameFill} />
        <path d="m5.7639 0.385 0.559-2e-6v0.559c-0.30873 0-0.559-0.25027-0.559-0.559z"
            fill={buildingOutline} />
        <circle cx="6.3229" cy=".385" r=".19792"
            fill={buildingInnerFrameFill} />
        <path d="m6.3229 5.7639c-0.30873 0-0.559 0.25027-0.559 0.559h0.559z"
            fill={buildingOutline} />
        <circle cx="6.3229" cy="6.3229" r=".19792"
            fill={buildingInnerFrameFill} />
        <path d="m0.38529 5.7639c0.30873 0 0.559 0.25027 0.559 0.559h-0.559z"
            fill={buildingOutline} />
        <circle cx=".38529" cy="6.3229" r=".19792"
            fill={buildingInnerFrameFill} />
        <path d="m6.4861 0.78112 1e-5 5.146-0.16319-3.7e-5h-4e-5c-0.21861 0-0.3958 0.17722-0.3958 0.39583l5e-6 0.19792-5.146-0.03471v-0.1632c0-0.21861-0.17722-0.39583-0.39583-0.39583l-0.16319 3.7e-5v-5.146l0.16319-2.94e-4c0.21861 0 0.39579-0.17722 0.39581-0.39583l2e-5 -0.16288h5.146l-2.1e-5 0.163c-3e-6 0.21861 0.17722 0.39571 0.39584 0.39593z"
            fill="none" stroke={buildingInnerFrameFill} strokeWidth=".07" />
    </g>;
}

const BuildingUpgrade2Def = dependencies(BuildingDef, BuilderDef, SansTwoDef, PlaceArrowDef, function BuildingUpgrade2Def() {
    return <g id="building-upgrade-2">
        <use transform="translate(.62986 1.3872)" xlinkHref="#building" />
        <use transform="matrix(.16877 0 0 .16877 2e-6 1e-6)" xlinkHref="#builder" />
        <use transform="matrix(.30824 0 0 .30824 1.3666 1.318)" xlinkHref="#sans-two" />
        <use transform="translate(6.322 5.8047)" xlinkHref="#place-arrow" />
    </g>;
});

function CertificateDef() {
    return <g id="certificate">
        <path d="m2.6973 5.8581 0.63624 2.1206c0.09367 0.31223 0.39888 0.30906 0.5055 0.14094l0.41936-0.77603 0.82438 0.30778c0.18086 0.06752 0.42251-0.14274 0.28828-0.43979l-0.90374-1.9999"
            fill={certificateFill} stroke={certificateOutline} strokeWidth=".35914" />
        <path d="m1.598 5.1858-0.89477 2.0251c-0.13175 0.29817 0.10671 0.50704 0.29256 0.43567l0.81202-0.31181 0.43754 0.76434c0.09591 0.16754 0.41387 0.16613 0.50493-0.14686l0.61307-2.1073"
            fill={certificateFill} stroke={certificateOutline} strokeWidth=".35914" />
        <path d="m5.9279 4.1193c-0.045536 0.14011-0.70132 0.46719-0.78793 0.58638-0.086604 0.11918-0.19513 0.84393-0.31433 0.93052-0.1192 0.086588-0.84199-0.034262-0.98211 0.011254-0.14012 0.045516-0.65392 0.56806-0.80125 0.56805-0.14733-1.07e-5 -0.66105-0.52263-0.80116-0.56817-0.14011-0.045537-0.86293 0.075208-0.98211-0.011398-0.11918-0.086605-0.22761-0.81137-0.3142-0.93057-0.086586-0.1192-0.74233-0.44637-0.78784-0.58649-0.045518-0.14012 0.29277-0.7902 0.29279-0.93752 1.041e-5 -0.14733-0.33819-0.79745-0.29265-0.93757s0.70132-0.46719 0.78793-0.58638c0.086604-0.11918 0.19513-0.84393 0.31433-0.93052 0.1192-0.086588 0.84199 0.034262 0.98211-0.011254 0.14012-0.045516 0.65392-0.56806 0.80125-0.56805 0.14733 1.067e-5 0.66105 0.52263 0.80116 0.56817 0.14011 0.045537 0.86293-0.075208 0.98211 0.011398 0.11918 0.086605 0.22761 0.81137 0.3142 0.93057 0.086586 0.1192 0.74233 0.44637 0.78784 0.58649 0.045518 0.14012-0.29277 0.7902-0.29279 0.93752-1.04e-5 0.14733 0.33819 0.79745 0.29265 0.93757z"
            fill={certificateFill} stroke={certificateOutline} strokeWidth=".29519" />
        <circle cx="3.0425" cy="3.1816" r="2.0255"
            fill={certificateInnerFill} stroke={certificateInnerOutline} strokeWidth=".15" />
    </g>;
}

const CertificateGain2Def = dependencies(SansTwoDef, AdvanceArrowDef, function CertificateGain2Def() {
    return <g id="certificate-gain-2">
        <path d="m3.1695 0.082499 3.087 2.1515v2.97l-3.087 2.1281-3.087-2.1281v-2.97z"
            fill="none" stroke={black} strokeLinejoin="round" strokeWidth=".165" />
        <path d="m6.2564 2.234-3.087 2.0697-3.087-2.0697 3.087-2.1515z"
            fill={modelDarkSide} />
        <path d="m3.1695 4.3037-3.087-2.0697v2.97l3.087 2.1281z"
            fill={modelMidSide} />
        <path d="m3.1695 4.3037 3.087-2.0697v2.97l-3.087 2.1281z"
            fill={modelLightSide} />
        <use transform="matrix(.59642 0 0 .59642 2.2217 1.9784)" xlinkHref="#sans-two" />
        <use transform="translate(.781 6.9333)" xlinkHref="#advance-arrow" />
    </g>;
});

const CertificatePerm1Def = dependencies(SansOneDef, CertificateDef, SansInfDef, function CertificatePerm1Def() {
    return <g id="certificate-perm-1">
        <use transform="translate(0 1.3461)" xlinkHref="#sans-one" />
        <use transform="translate(4.0908)" xlinkHref="#certificate" />
        <use transform="translate(11.106 3.0201)" xlinkHref="#sans-inf" />
    </g>;
});

const CertificatePerm2Def = dependencies(SansTwoDef, CertificateDef, SansInfDef, function CertificatePerm2Def() {
    return <g id="certificate-perm-2">
        <use transform="translate(0 1.3644)" xlinkHref="#sans-two" />
        <use transform="translate(4.6386)" xlinkHref="#certificate" />
        <use transform="translate(11.654 3.0201)" xlinkHref="#sans-inf" />
    </g>;
});

function BranchletDef() {
    return <g id="branchlet">
        <path d="m1.8932 0.082499 3.1254 0.87643 1.4304 1.4717v3.6711l-3.1006 0.81029-3.266-0.8599v-3.6546z"
            fill="none" stroke={black} strokeLinejoin="round" strokeWidth=".165" />
        <path d="m3.3484 3.241 1.6702-2.282-3.1254-0.87643-1.8107 2.3151z"
            fill={modelMidSide} />
        <path d="m3.3484 6.9121v-3.6711l-3.2659-0.84336v3.6546z"
            fill={modelDarkSide} />
        <path d="m3.3484 3.241 1.6702-2.282 1.4304 1.4717v3.6711l-3.1006 0.81029z"
            fill={modelLightSide} />
    </g>;
}

const BranchletPlaceDef = dependencies(BranchletDef, PlaceArrowDef, function BranchletPlaceDef() {
    return <g id="branchlet-place">
        <use xlinkHref="#branchlet" />
        <use transform="translate(5.6285 4.5861)" xlinkHref="#place-arrow" />
    </g>;
});

function MediumTownIconDef() {
    return <g id="medium-town">
        <rect width="5.884" height="5.884" ry="1"
            fill={mediumTownIconFill} />
        <path d="m5.1744 1.5467v2.7905l-0.11524-8.5e-5c-0.39867-8.5e-5 -0.72192 0.32316-0.72192 0.72192v0.11533l-2.7905 2.41e-4v-0.11562c0-0.3987-0.32325-0.72195-0.72192-0.722l-0.11524 2.17e-4v-2.7905h0.11533c0.39875 0 0.722-0.32325 0.72192-0.72192l-8.4e-5 -0.11524h2.7905v0.11533c0 0.39875 0.32325 0.722 0.72192 0.72192z"
            fill="none" stroke={mediumTownIconInner} strokeWidth=".067" />
        <circle cx=".82488" cy=".82488" r=".14883"
            fill={mediumTownIconInner} />
        <circle cx="5.0591" cy=".82488" r=".14883"
            fill={mediumTownIconInner} />
        <circle cx="5.0591" cy="5.0591" r=".14883"
            fill={mediumTownIconInner} />
        <circle cx=".82488" cy="5.0591" r=".14883"
            fill={mediumTownIconInner} />
        <path d="m3.5982 3.6028-0.46496-0.19898-0.1913 0.96643-0.1913-0.96643-0.47137 0.20084 0.20082-0.47138-0.96643-0.1913 0.96643-0.1913-0.199-0.46494 0.46954 0.1944 0.1913-0.96643 0.1913 0.96643 0.46723-0.19671-0.19669 0.46725 0.96643 0.1913-0.96643 0.1913z"
            fill={mediumTownIconInner} />
    </g>;
}

function EngineDef() {
    return <g id="engine">
        <path d="m6.4578 0.76112 0.30117 0.52164h0.57517l0.22825-0.22825-0.36055-0.36055v-0.66146l1.9203-2e-7h2.0846v0.66146l-0.30566 0.36055v1.0677c1.1506 0 1.0986 0.67324 1.0986 1.8218 0.12917 0.07453 0.30546 0.2025 0.30546 0.35223s0.22306 1.8703 0.57836 2.2256h-0.88326l-4.6e-4 0.40617c-7.9e-4 0.69795-0.68077 1.3845-1.3845 1.3845l-9.0394 9.18e-4c-0.69747 0-1.1751-1.1184-1.1751-1.818h-0.35079v-1.3564h0.28648c0.15464 0 0.28145-0.12154 0.28647-0.26894v-2.415c0-0.30314-0.28971-0.6153-0.59049-0.6153v-1.0973z"
            fill={modelDarkSide} />
        <path d="m2.1197 0.76112h4.3381v1.4078h0.98222v-0.51449l0.5028-0.5028 0.5028 0.5028v0.51449h0.98222v-1.1144l-0.30567-0.36055v-0.66146h2.0846v0.66146l-0.30566 0.36055v1.0677c1.1464 0 1.0986 0.66813 1.0986 1.8218 0.14477 0.03879 0.30546 0.1986 0.30546 0.35223s0.22462 1.8718 0.57836 2.2256h-0.88326l-4.6e-4 0.40618c0 0.70158-0.68822 1.3792-1.3845 1.3845-0.69632 0.0054-1.3845-0.67997-1.3845-1.3845v-0.40624h-0.48809l9e-5 0.40624c0 0.70434-0.68133 1.3859-1.3845 1.3845-0.70318-0.0014-1.3845-0.6807-1.3845-1.3845v-0.40624h-0.48809l9e-5 0.40624c0 0.70092-0.68413 1.385-1.385 1.385s-1.385-0.68038-1.385-1.385v-0.43264h-0.59616v-1.3564h0.32657c0.14504 0 0.32656-0.11717 0.32656-0.26894v-2.415c0-0.30303-0.3522-0.6153-0.65313-0.6153z"
            fill={modelLightSide} />
        <path d="m7.2019 0.69396 1.9203-2e-7 0.30567 0.36055h-1.8654z"
            fill={modelMidSide} />
        <path d="m2.1197 1.8397c0.29465 0.01622 0.65313 0.31608 0.65313 0.6153h-2.1498c0-0.30241-0.29068-0.6153-0.59049-0.6153z"
            fill={modelMidSide} />
        <path d="m0.40083 6.4954h2.315v0.43264l0.12153 0.5216h-2.2185c-0.10535-0.28238-0.21803-0.50163-0.21803-0.95424z"
            fill={modelMidSide} />
        <path d="m6.4578 0.76112 0.30117 0.52164h0.57517l0.22825-0.22825-0.36055-0.36055v-0.66146l1.9203-2e-7h2.0846v0.66146l-0.30566 0.36055v1.0677c1.1506 0 1.0986 0.67324 1.0986 1.8218 0.12917 0.07453 0.30546 0.2025 0.30546 0.35223s0.22306 1.8703 0.57836 2.2256h-0.88326l-4.6e-4 0.40617c-7.9e-4 0.69795-0.68077 1.3845-1.3845 1.3845l-9.0394 9.18e-4c-0.69747 0-1.1751-1.1184-1.1751-1.818h-0.35079v-1.3564h0.28648c0.15464 0 0.28145-0.12154 0.28647-0.26894v-2.415c0-0.30314-0.28971-0.6153-0.59049-0.6153v-1.0973z"
            fill="none" stroke={black} strokeWidth=".065" />
    </g>;
}

const Cowboy = dependencies(CowboyDef, function Cowboy() { return <use xlinkHref="#cowboy" />; });
const Builder = dependencies(BuilderDef, function Builder() { return <use xlinkHref="#builder" />; });
const Engineer = dependencies(EngineerDef, function Engineer() { return <use xlinkHref="#engineer" />; });

const BagTileFrame = dependencies(BagTileFrameDef, function BagTileFrame() { return <use xlinkHref="#bag-tile-frame" />; });

function Flood() {
    return <path d="m6.3265 5.2368c2.8334 3.6974 4.2499 6.328 4.2499 7.8926a4.2499 4.2499 0 1 1-8.4997 0c0-1.5646 1.4164-4.1952 4.2499-7.8926z"
        fill={floodFill} strokeWidth=".60712" />;
}
function Drought() {
    return <path d="m9.9703 13.65c-0.17065-0.2337-0.26755-0.46798-0.26714-0.73736-4.288e-4 -0.26953 0.096485-0.50339 0.26714-0.73723 0.17107-0.23091 0.41406-0.4597 0.71602-0.64341-0.3524 0.02852-0.68344-0.0139-0.95759-0.10027-0.27544-0.088616-0.49117-0.2215-0.64903-0.43878-0.15814-0.21714-0.21855-0.46363-0.21799-0.75309 0.0022576-0.28738 0.064622-0.61533 0.20114-0.94145-0.26825 0.23019-0.56097 0.39016-0.83387 0.48091-0.27543 0.089607-0.5281 0.10872-0.7826 0.025707-0.25506-0.082436-0.44803-0.24635-0.6184-0.48049-0.16741-0.23356-0.3104-0.53527-0.39158-0.87922-0.081182 0.34395-0.22403 0.64566-0.39158 0.87922-0.17023 0.23412-0.36348 0.39805-0.6184 0.48049-0.25464 0.083011-0.50717 0.0639-0.78246-0.025707-0.2729-0.090746-0.5656-0.25056-0.83387-0.48091 0.13652 0.32612 0.19875 0.65407 0.201 0.94145 4.18e-4 0.28948-0.059819 0.53595-0.21798 0.75309-0.15802 0.21728-0.3736 0.35015-0.64917 0.43878-0.27387 0.08637-0.60493 0.12879-0.95732 0.10027 0.30197 0.18372 0.54495 0.4125 0.7159 0.64341 0.17079 0.23384 0.26756 0.4677 0.26728 0.73723 2.742e-4 0.26939-0.096486 0.50366-0.26728 0.73736-0.17093 0.23091-0.41393 0.45955-0.7159 0.64341 0.3524-0.02851 0.68344 0.01376 0.95732 0.10015 0.27557 0.08876 0.49115 0.22162 0.64917 0.43892 0.15816 0.217 0.2184 0.46363 0.21798 0.75324-0.00225 0.2875-0.064483 0.61518-0.201 0.9413 0.26827-0.23035 0.56096-0.39018 0.83387-0.48091 0.27527-0.08959 0.52782-0.1087 0.78246-0.0257 0.25492 0.08245 0.44817 0.24635 0.6184 0.48049 0.16756 0.2337 0.3104 0.53525 0.39158 0.87921 0.081181-0.34396 0.22417-0.6455 0.39158-0.87921 0.17037-0.23414 0.36336-0.39805 0.6184-0.48049 0.25464-0.08299 0.50717-0.06391 0.7826 0.0257 0.2729 0.09074 0.56562 0.25056 0.83387 0.48091-0.13652-0.32614-0.19887-0.65381-0.20114-0.94145-5.568e-4 -0.28948 0.059839-0.53609 0.21799-0.75309 0.158-0.2173 0.37359-0.35015 0.64903-0.43892 0.27415-0.08637 0.60519-0.12865 0.95759-0.10015-0.30199-0.18384-0.54497-0.4125-0.71602-0.64341z"
        fill={droughtFill} />;
}
function Rockslide() {
    return <path d="m10.06 10.168c0.0097 0.01037 0.01638 0.02321 0.01934 0.03719l0.60553 2.8435c0.0058 0.0275-0.0036 0.05608-0.02444 0.07476l-4.8806 4.3673c-0.011402 0.01024-0.025561 0.01685-0.040729 0.0191l-2.206 0.32977c-0.039151 0.0058-0.076534-0.01828-0.087118-0.05654l-1.2565-4.5099c-0.00517-0.01866-0.0033-0.03863 0.0053-0.05596l2.3149-4.6559c0.011161-0.022414 0.032301-0.038145 0.056915-0.042328l3.0931-0.53273c0.024059-0.00422 0.048715 0.00315 0.066551 0.01976l2.3296 2.1579c0.0016 0.0012 0.0029 0.0027 0.0043 0.0041z"
        fill={rockSlideFill} />;
}

const Bandit = dependencies(RevolverBaseDef, function Bandit({ kind }) {
    const fill
        = kind === 'Green' ? banditGreenFill
        : kind === 'Orange' ? banditOrangeFill
        : '';
    return <use transform="matrix(2.6486 0 0 2.6486 2.1861 5.8539)" xlinkHref="#revolver-base"
        fill={fill} stroke={black} strokeWidth=".048" />;
});

const HandTrail = dependencies([HandDef, ['hand']], function HandTrail({ bandit, hand }) {
    return <use transform={`matrix(4.2965 0 0 4.2965 12.389 ${bandit ? '7.645' : '2.2446'})`} xlinkHref={
          hand === 'Green' ? '#hand-green'
        : hand === 'Black' ? '#hand-black'
        : ''} />;
});

function StationMasterFrameClipsDef() {
    return <>
        <clipPath id="station-master-frame-top-clip"><rect width="22" height="13" fillRule="evenodd" /></clipPath>
        <clipPath id="station-master-frame-bottom-clip"><rect y="13" width="22" height="13" fillRule="evenodd" /></clipPath>
    </>;
}

const StationMasterFrame = dependencies(StationMasterFrameClipsDef, function StationMasterFrame() {
    return <>
        <rect width="22" height="26" ry="3.63" clipPath="url(#station-master-frame-top-clip)"
            fill={stationMasterFrameTopFill} />
        <rect width="22" height="26" ry="3.63" clipPath="url(#station-master-frame-bottom-clip)"
            fill={stationMasterFrameBottomFill} />
        <path d="m0 13h22"
            fill="none" stroke={white} strokeWidth=".6" />
    </>;
});

function BanditClipsDef() {
    return <>
        <clipPath id="bandit-top-clip"><path d="m12.538 8.4171 5.8796-1.8852v-2.7431h-5.8796z" /></clipPath>
        <clipPath id="bandit-bottom-clip"><path d="m12.538 8.4005 5.8796-1.8852v4.3802l-5.8796 2e-6z" /></clipPath>
    </>;
}

const StationMasterTile1 = dependencies(
    HazzardDef, TakeArrowDef, BanditClipsDef, RevolverBaseDef,
    ObjectiveDef, SansColonDef, [ShieldVpDef, { value: '3' }],
    function StationMasterTile1() {
        return <>
            <use transform="translate(2.8102 3.7521)" xlinkHref="#hazzard" />
            <use transform="translate(7.6408 2.6411)" xlinkHref="#take-arrow" />
            <path d="m12.703 2.2025-3.4065 9.0951"
                fill="none" stroke={white} strokeWidth=".45" />
            <rect transform="translate(.77188 -.061185)" x="12.538" y="3.7888" width="5.8796" height="7.1068" ry=".8" clipPath="url(#bandit-bottom-clip)"
                fill={banditGreenFill} style={{ paintOrder: 'stroke' }} />
            <rect transform="translate(.77188 -.061185)" x="12.538" y="3.7888" width="5.8796" height="7.1068" ry=".8" clipPath="url(#bandit-top-clip)"
                fill={banditOrangeFill} style={{ paintOrder: 'stroke' }} />
            <use transform="translate(14.645 4.6159)" xlinkHref="#revolver-base"
                fill={black} />
            <use transform="translate(17.878 2.6656)" xlinkHref="#take-arrow" />
            <use transform="translate(2.5527 15.277)" xlinkHref="#objective" />
            <use transform="translate(5.1985 16.335)" xlinkHref="#objective" />
            <use transform="translate(11.522 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 14.175 16.069)" xlinkHref="#vp-3" />
        </>;
    });

const StationMasterTile2 = dependencies(CertificatePerm1Def,
    SansTwoDef, CertificateDef, SansColonDef, [ShieldVpDef, { value: '3' }],
    function StationMasterTile2() {
        return <>
            <use transform="translate(3.0534 2.5437)" xlinkHref="#certificate-perm-1" />
            <use transform="matrix(.68263 0 0 .68263 2.3324 17.13)" xlinkHref="#sans-two" />
            <use transform="matrix(.83095 0 0 .83095 5.5741 15.755)" xlinkHref="#certificate" />
            <use transform="translate(11.963 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 14.396 16.069)" xlinkHref="#vp-3" />
        </>;
    });

const StationMasterTile3 = dependencies(CertificatePerm1Def,
    RevolverBaseDef, SansColonDef, [ShieldVpDef, { value: '3' }],
    function StationMasterTile3() {
        return <>
            <use transform="translate(3.0534 2.5437)" xlinkHref="#certificate-perm-1" />
            <rect x="2.011" y="14.903" width="5.8796" height="7.1068" ry=".8"
                fill={banditGreenFill} style={{ paintOrder: 'stroke' }} />
            <use transform="translate(3.3461 15.791)" xlinkHref="#revolver-base"
                fill={black} />
            <rect x="5.7152" y="16.49" width="5.8796" height="7.1068" ry=".8"
                fill={banditOrangeFill} style={{ paintOrder: 'stroke' }} />
            <use transform="translate(7.0502 17.379)" xlinkHref="#revolver-base"
                fill={black} />
            <use transform="translate(12.606 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 14.717 16.069)" xlinkHref="#vp-3" />
        </>;
    });

const StationMasterTile4 = dependencies(CertificatePerm1Def,
    HazzardDef, SansColonDef, [ShieldVpDef, { value: '3' }],
    function StationMasterTile4() {
        return <>
            <use transform="translate(3.0534 2.5437)" xlinkHref="#certificate-perm-1" />
            <use transform="translate(2.011 14.903)" xlinkHref="#hazzard" />
            <use transform="translate(5.7152 16.49)" xlinkHref="#hazzard" />
            <use transform="translate(12.606 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 14.717 16.069)" xlinkHref="#vp-3" />
        </>;
    });

const StationMasterTile5 = dependencies(CoinDef, SerifTwoWhiteDef,
    WorkerDef, SansColonDef, [ShieldVpDef, { value: '1' }],
    function StationMasterTile5() {
        return <>
            <use transform="translate(6.7 2.4504)" fill="#ffffff" xlinkHref="#coin" />
            <use transform="translate(9.7167 4.7922)" fill="#ffffff" xlinkHref="#serif-two-white" />
            <use transform="translate(2.9036 15.697)" xlinkHref="#worker" />
            <use transform="translate(10.821 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 13.825 16.069)" xlinkHref="#vp-1" />
        </>;
    });

const StationMasterTile6 = dependencies(CertificatePerm1Def,
    StationDef, SansColonDef, [ShieldVpDef, { value: '3' }],
    function StationMasterTile6() {
        return <>
            <use transform="translate(3.0534 2.5437)" xlinkHref="#certificate-perm-1" />
            <use transform="translate(2.3557 15.14)" xlinkHref="#station" />
            <use transform="translate(5.2648 17.136)" xlinkHref="#station" />
            <use transform="translate(11.916 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 14.372 16.069)" xlinkHref="#vp-3" />
        </>;
    });

const StationMasterTile7 = dependencies(CertificateGain2Def,
    BuildingDef, SansColonDef, [ShieldVpDef, { value: '2' }],
    function StationMasterTile7() {
        return <>
            <use transform="translate(7.8305 1.5326)" xlinkHref="#certificate-gain-2" />
            <use transform="translate(2.7299 15.896)" xlinkHref="#building" />
            <use transform="translate(11.168 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 13.998 16.069)" xlinkHref="#vp-2" />
        </>;
    });

const StationMasterTile8 = dependencies(CertificatePerm2Def, [ShieldVpDef, { value: '0' }],
    function StationMasterTile8() {
        return <>
            <use transform="translate(2.7795 2.5437)" xlinkHref="#certificate-perm-2" />
            <use transform="translate(7.8992 15.508)" xlinkHref="#vp-0" />
        </>;
    });

const StationMasterTile9 = dependencies(CoinDef, SerifOneWhiteDef, SerifTwoWhiteDef, [ShieldVpDef, { value: '0' }],
    function StationMasterTile9() {
        return <>
            <use transform="translate(6.7 2.4504)" xlinkHref="#coin" />
            <use transform="translate(8.5186 4.8773)" xlinkHref="#serif-one-white" />
            <use transform="translate(10.916 4.7674)" xlinkHref="#serif-two-white" />
            <use transform="translate(7.8992 15.508)" xlinkHref="#vp-0" />
        </>;
    });

const StationMasterTile10 = dependencies(BranchletPlaceDef,
    MediumTownIconDef, SansColonDef, [ShieldVpDef, { value: '2' }],
    function StationMasterTile10() {
        return <>
            <use transform="translate(7.7342 3.2527)" xlinkHref="#branchlet-place" />
            <use transform="translate(2.936 16.308)" xlinkHref="#medium-town" />
            <use transform="translate(10.756 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 13.792 16.069)" xlinkHref="#vp-2" />
        </>;
    });

const StationMasterTile11 = dependencies(BuildingUpgrade2Def,
    Cattle3to5Def, SansColonDef, [ShieldVpDef, { value: '1' }],
    function StationMasterTile11() {
        return <>
            <use transform="translate(7.0162 2.6674)" xlinkHref="#building-upgrade-2" />
            <use transform="translate(3.2507 15.699)" xlinkHref="#cattle-3-5" />
            <use transform="translate(10.126 17.848)" xlinkHref="#sans-colon" />
            <use transform="matrix(.85006 0 0 .85006 13.477 16.069)" xlinkHref="#vp-1" />
        </>;
    });

function MediumTownFrame() {
    return <rect width="27" height="27" ry="3.7696"
        fill={mediumTownFrameFill} />;
}

const MediumTownTile1 = dependencies(SansTwoDef, SansXDef, HazzardTakeDef, function MediumTownTile1() {
    return <>
        <rect x="4.9461" y="5.9577" width="4.6723" height="7.0845"
            fill={trashCardFill} stroke={black} strokeLinejoin="round" strokeWidth=".065" style={{ paintOrder: 'stroke' }} />
        <use transform="matrix(.66252 0 0 .66252 3.7551 4.0786)" xlinkHref="#sans-two" />
        <use transform="matrix(.66252 0 0 .66252 5.9528 5.1585)" xlinkHref="#sans-x" />
        <path d="m12.028 14.263-1.1887 1.1887-1.1887-1.1887-1.1887 1.1887-1.1887-1.1887 1.1887-1.1887-1.1887-1.1887 1.1887-1.1887 1.1887 1.1887 1.1887-1.1887 1.1887 1.1887-1.1887 1.1887z"
            fill={trashCrossFill} stroke={white} strokeWidth=".165" />
        <use transform="matrix(1.1794 0 0 1.1794 15.681 11.999)" xlinkHref="#hazzard-take" />
    </>;
});

const MediumTownTile2 = dependencies(CoinDef, SerifFiveWhiteDef, CattleTake3Def, function MediumTownTile2() {
    return <>
        <use transform="matrix(.83141 0 0 .83141 5.5916 5.9253)" xlinkHref="#coin" />
        <use transform="translate(7.9119 7.542)" xlinkHref="#serif-five-white" />
        <use transform="matrix(1.298 0 0 1.298 16.419 12.891)" xlinkHref="#cattle-take-3" />
    </>;
});

// Todo: plus and two seem offset
const MediumTownTile3 = dependencies(WorkerDef, TakeArrowDef, CoinDef, SerifTwoBaseDef, function MediumTownTile3() {
    return <>
        <use transform="matrix(1.7473 0 0 1.7473 8.2463 7.2911)" xlinkHref="#worker" />
        <use transform="matrix(1.4966 0 0 1.4966 18.002 7.278)" xlinkHref="#take-arrow" />
        <use transform="matrix(.83136 0 0 .83136 15.3 15.549)" xlinkHref="#coin" />
        <path d="m16.558 19.454v-0.53008l0.53008 1e-6 -1e-6 -0.53008h0.53008l-1e-6 0.53008 0.53008-1e-6v0.53008l-0.53008 1e-6 1e-6 0.53008h-0.53008l1e-6 -0.53008z"
            fill={costReductionFill} stroke={white} strokeWidth=".4" style={{ paintOrder: 'stroke' }} />
        <use transform="matrix(1.0418 0 0 1.0418 18.542 17.096)" xlinkHref="#serif-two-base"
            fill={costReductionFill} stroke={white} strokeWidth=".4" style={{ paintOrder: 'stroke' }} />
    </>;
});

const MediumTownTile4 = dependencies(BuildingUpgrade2Def, function MediumTownTile4() {
    return <use transform="matrix(2.0522 0 0 2.0522 5.3244 3.7703)" xlinkHref="#building-upgrade-2" />;
});

const MediumTownTile5 = dependencies(EngineDef, SerifThreeWhiteDef, AdvanceArrowDef, function MediumTownTile5() {
    return <>
        <use transform="translate(5.0148 9.3271)" xlinkHref="#engine" />
        <use transform="translate(11.289 11.815)" xlinkHref="#serif-three-white" />
        <use transform="rotate(-90 17.516 -.96735)" xlinkHref="#advance-arrow" />
    </>;
});

function MediumTownDivider() {
    return <path d="m8.8674 18.992 10.125-10.125"
        fill="none" stroke={white} strokeWidth="1.1" />;
}

function Tile({ traits, ...props }) {
    const { bag, stationMaster, mediumTown } = traits;
    const { kind, hand, tile } = traits;
    const size = mediumTown ? '27 27' : '22 26';
    const nodes = compact(
          bag ?
              traits.Cowboy ? [Cowboy]
            : traits.Builder ? [Builder]
            : traits.Engineer ? [Engineer]
            : [
                BagTileFrame,
                  traits.Flood ? Flood
                : traits.Drought ? Drought
                : traits.Rockslide ? Rockslide
                : traits.Bandit ? [Bandit, { kind }]
                : null,
                [HandTrail, { bandit: traits.Bandit, hand }],
                traits.hazzard ? [ShieldHazzard, { value: kind }] : null,
            ]
        : stationMaster ? [
            StationMasterFrame,
              tile === 1 ? StationMasterTile1
            : tile === 2 ? StationMasterTile2
            : tile === 3 ? StationMasterTile3
            : tile === 4 ? StationMasterTile4
            : tile === 5 ? StationMasterTile5
            : tile === 6 ? StationMasterTile6
            : tile === 7 ? StationMasterTile7
            : tile === 8 ? StationMasterTile8
            : tile === 9 ? StationMasterTile9
            : tile === 10 ? StationMasterTile10
            : tile === 11 ? StationMasterTile11
            : null,
        ]
        : mediumTown ? [
            MediumTownFrame,
              tile === 1 ? MediumTownTile1
            : tile === 2 ? MediumTownTile2
            : tile === 3 ? MediumTownTile3
            : tile === 4 ? MediumTownTile4
            : tile === 5 ? MediumTownTile5
            : null,
            oneOf(tile, [1,2]) ? MediumTownDivider : null,
        ]
        : []);
    const defs = resolve(nodes);

    return <Svg {...props} viewBox={`0 0 ${size}`}>
        <defs>
            {render(defs)}
        </defs>
        {render(nodes)}
    </Svg>;

    function render(items) {
        return <>
            {map(items, (item, i) => {
                const [Component, props] = castWithProps(item);
                return <Component {...props} key={i} />;
            })}
        </>;
    }
}

function dependencies(...dependencies) {
    const Component = last(dependencies)
    dependencies = initial(dependencies);
    return assign(Component, { dependencies });
}

function resolve(nodes, parentProps = {}, found = new Set(), inner = false) {
    return reduce(nodes, (defs, node) => {
        let props;
        [node, props] = castWithProps(node);
        props = parent(props);
        const depRepr = nodeRepr(node, props);

        if (found.has(depRepr)) return defs;
        found.add(depRepr);

        inner && (defs = [...defs, [node, props]]);
        const depDefs = resolve(node.dependencies || [], props, found, true);
        return [...defs, ...depDefs];
    }, []);

    function parent(props) {
        return isArray(props) ? pick(parentProps, props) : props;
    }
}

function castWithProps(node) {
    const [dep, props = {}] = castArray(node);
    return [dep, props];
}

function nodeRepr(dep, props) {
    return `${funcName(dep)}${repr(props)}`;
    function repr(v) {
        return isObject(v) ? `{${join(map(sortBy(entries(v), [0]), ([k,v]) => `${k}:${repr(v)}`), ',')}}`
            : isArray(v) ? `[${join(map(v, repr(v)), ',')}]`
            : `${v}`;
    }
}

const functionPattern = /^\s*function(?:\s|\s*\/\*[^(?:*/)]+\*\/\s*)*([^\s(/]+)/;
function funcName(fn) {
    fn = Object(fn);
    if (typeof fn !== 'function') return null;

    const n = fn.name;
    const m = n ? [,n] : fn.toString().match(functionPattern);
    return m ? m[1] : '';
}
