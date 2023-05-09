import Programs from "./Programs"
import Documents from "./Documents"
import Settings from "./Settings"
import Help from "./Help"
import ShutDown from "./ShutDown"
import Notes from "./Notes"
import Computer from "./Computer"
import Messages from "./Messages"
import Keys from "./Keys"
import Gallery from "./Gallery"
import Phone from "./Phone"
import Trash from "./Trash"
import Musics from "./Musics"
import Movies from "./Movies"
import World from "./World"
import Modules from "./Modules"
import Wiki from "./Wiki"
import Paint from "./Paint"
import Ai from "./Ai"
import TRexRunner from "./TRexRunner"
import Solitaire from "./Solitaire"
import Snake from "./Snake"
import Pacman from "./Pacman"
import MinesWeeper from "./MinesWeeper"

export const programs = [
  {
    menu: true,
    desktop: false,
    label: "Programs",
    icon: "appwizard-2",
    component: props => <Programs {...props} />,
  },
  {
    menu: true,
    desktop: true,
    label: "Documents",
    icon: "directory_open_file_mydocs-0",
    component: props => <Documents {...props} />,
  },
  {
    menu: true,
    desktop: false,
    label: "Settings",
    icon: "settings_gear-0",
    component: props => <Settings {...props} />,
  },
  {
    menu: true,
    desktop: false,
    label: "Help",
    icon: "help_book_cool-0",
    component: props => <Help {...props} />,
  },
  {
    menu: true,
    desktop: false,
    label: "Shut Down...",
    icon: "shut_down_cool-4",
    component: props => <ShutDown {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Notes",
    icon: "address_book_pad",
    component: props => <Notes {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Computer",
    icon: "computer-2",
    component: props => <Computer {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Messages",
    icon: "envelope_closed-0",
    component: props => <Messages {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Keys",
    icon: "key_padlock-0",
    component: props => <Keys {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Gallery",
    icon: "wia_img_color-0",
    component: props => <Gallery {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Phone",
    icon: "modem-2",
    component: props => <Phone {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Trash",
    icon: "recycle_bin_full-0",
    component: props => <Trash {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Musics",
    icon: "wm-2",
    component: props => <Musics {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Movies",
    icon: "movie_maker-0",
    component: props => <Movies {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "World",
    icon: "world-3",
    component: props => <World {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Modules",
    icon: "regedit-0",
    component: props => <Modules {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Wiki",
    icon: "web_file_set-0",
    component: props => <Wiki {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Paint",
    icon: "paint_old-0",
    component: props => <Paint {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "AI",
    icon: "computer_2-3",
    component: props => <Ai {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "TRexRunner",
    icon: "joystick_alt-0",
    component: props => <TRexRunner {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Solitaire",
    icon: "game_solitaire-0",
    component: props => <Solitaire {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Snake",
    icon: "joystick_alt-0",
    component: props => <Snake {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Pacman",
    icon: "joystick_alt-0",
    component: props => <Pacman {...props} />,
  },
  {
    menu: false,
    desktop: true,
    label: "Mines Weeper",
    icon: "minesweeper-0",
    component: props => <MinesWeeper {...props} />,
  },
]

export default programs;
