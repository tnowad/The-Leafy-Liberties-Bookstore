import React from "react";

const RouteTree = ({ routes }) => {
  const groupedRoutes = groupRoutesByPrefix(routes);

  return (
    <ul className="space-y-2">
      {groupedRoutes.map((group) => (
        <li key={group.prefix} className="flex items-center space-x-2">
          <span className="font-bold">{group.prefix}</span>
          {group.routes.length > 0 && (
            <ul className="space-y-1 ml-4">
              {group.routes.map((route) => (
                <li key={route.Route} className="truncate">
                  <span className="px-1 py-0.5 text-sm font-medium text-green-800 bg-green-100 rounded-md">
                    {route["HTTP Method"]}
                  </span>{" "}
                  <span>{route.Route}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const groupRoutesByPrefix = (routes) => {
  const groups = {};

  routes.forEach((route) => {
    const prefix = route.Prefix || "/";
    if (!groups[prefix]) {
      groups[prefix] = {
        prefix,
        routes: [],
      };
    }

    groups[prefix].routes.push(route);
  });

  return Object.values(groups);
};

const RouteBackend = () => {
  // fetch routes from backend and pass them to RouteTree
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setRoutes(data));
  }, []);

  return <RouteTree routes={routes} />;
}

export default RouteBackend;
