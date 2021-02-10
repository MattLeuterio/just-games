import {
  StorefrontOutline as StoresIcon,
  LogoSteam as SteamIcon,
  LogoPlaystation as PlaystationIcon,
  LogoXbox as XboxIcon,
  LogoAppleAppstore as AppleIcon,
  LogoGooglePlaystore as GooglePlayIcon,
} from "react-ionicons";
import { Image } from "./atoms";
import {
  IconGog,
  IconNintendo,
  IconItch,
  IconEpicGames,
} from "./ui/assets/img/icons";

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

// Random Int for Home Page's quote
export const getRandomInt = (min, max) => {
  const minV = Math.ceil(min);
  const maxV = Math.floor(max);
  return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
} 