import { env } from "../../env.js";

const USER_FACET = "core.user"

const userFacet = {
    name: "Alex",
    profilePictureUrl:"/hbui/assets/templateAlex-f66e6.png"
};

env.registerFacet(USER_FACET,userFacet);