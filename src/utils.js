import {
  StorefrontOutline as StoresIcon,
  LogoSteam as SteamIcon,
  LogoPlaystation as PlaystationIcon,
  LogoXbox as XboxIcon,
  LogoAppleAppstore as AppleIcon,
  LogoGooglePlaystore as GooglePlayIcon,
  LogoAndroid as AndroidIcon,
  LogoApple as MacIcon,
  GlobeOutline as WebIcon,
  GameController as GameIcon,
  LogoWindows as WindowsIcon
} from "react-ionicons";
import { Image } from "./atoms";
import {
  IconGog,
  IconNintendo,
  IconItch,
  IconEpicGames,
  IconLinux,
  Icon3DO,
  IconNeoGeo,
  IconSega,
  IconAmiga,
  IconAtari
} from "./ui/assets/img/icons";

// Platform switch logo
export const platformSwitch = (platform) => {
  let platformIcon;
  switch (platform) {
    case "playstation":
      platformIcon = <PlaystationIcon />;
      break;
    case "pc":
      platformIcon = <WindowsIcon />;
      break;
    case "xbox":
      platformIcon = <XboxIcon />;
      break;
    case "ios":
      platformIcon = <AppleIcon />;
      break;
    case "android":
      platformIcon = <AndroidIcon />;
      break;
    case "nintendo":
      platformIcon = <Image src={IconNintendo} width="26px" />;
      break;
    case "mac":
      platformIcon = <MacIcon />;
      break;
    case "linux":
      platformIcon = <Image src={IconLinux} width="26px" />;
      break;
    case "atari":
      platformIcon = <Image src={IconAtari} width="26px" />;
      break;
    case "commodore-amiga":
      platformIcon = <Image src={IconAmiga} width="26px" />;
      break;
    case "3DO":
      platformIcon = <Image src={Icon3DO} width="26px" />;
      break;
    case "neo-geo":
      platformIcon = <Image src={IconNeoGeo} width="26px" />;
      break;
    case "sega":
      platformIcon = <Image src={IconSega} width="26px" />;
      break;
    case "web":
      platformIcon = <Image src={WebIcon} width="26px" />;
      break;
    default:
      platformIcon = <GameIcon />;
  }

  return platformIcon;
};

// Game page - Store Logo assign
export const storesSwitch = (store) => {
  let storesIcon;
  switch (store) {
    case "steam":
      storesIcon = <SteamIcon />;
      break;
    case "playstation-store":
      storesIcon = <PlaystationIcon />;
      break;
    case "xbox360":
    case "xbox-store":
      storesIcon = <XboxIcon />;
      break;
    case "apple-appstore":
      storesIcon = <AppleIcon />;
      break;
    case "gog":
      storesIcon = <Image src={IconGog} width="28px" />;
      break;
    case "nintendo":
      storesIcon = <Image src={IconNintendo} width="26px" />;
      break;
    case "google-play":
      storesIcon = <GooglePlayIcon />;
      break;
    case "itch":
      storesIcon = <Image src={IconItch} width="26px" />;
      break;
    case "epic-games":
      storesIcon = <Image src={IconEpicGames} width="26px" />;
      break;
    default:
      storesIcon = <StoresIcon />;
  }

  return storesIcon;
};


export const platformType = (plat) => {
  if (typeof plat === "object") {
    return plat.slice(0, 3).map((plat) => platformSwitch(plat.platform.slug));
  } else {
    return platformSwitch(plat);
  }
};


// Random Int for Home Page's quote
export const getRandomInt = (min, max) => {
  const minV = Math.ceil(min);
  const maxV = Math.floor(max);
  return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
} 