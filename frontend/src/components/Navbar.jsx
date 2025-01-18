import { useAuthStore } from "../store/useAuthStore.js";

const Navbar = () => {
    const { authUser } = useAuthStore();

    return <div>Nav</div>
};

export default Navbar;