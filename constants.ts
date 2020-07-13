import bunyan from "bunyan";

export const routeVariables = {
  apiURL: "/api/v1",
  papyrusURL: "/papyrus",
  clientURL: "/",
  githubWebHookURL: "/githook",
  endpoints: {
    PAPYRUS: "/papyrus",
  },
};

export const logger = bunyan.createLogger({
  name: "aniruddha",
});
