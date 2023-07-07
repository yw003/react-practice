import Home from "../views/Home/index";
import My from "../views/My/index";
const routers: {
  path: string;
  name: string;
  components: any;
}[] = [
  {
    path: "/",
    name: "Home",
    components: Home,
  },
  {
    path: "/my",
    name: "My",
    components: My,
  },
];
export default routers;
