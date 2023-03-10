import React from "react";
import { publicRoutes, privateRoutes } from "../../routes";

const routes = [...publicRoutes, ...privateRoutes];

const RouteTree = ({ routes }) => {
  const groupedRoutes = groupRoutesByPrefix(routes);

  const stack = [];
  stack.push(...groupedRoutes);

  const tree = [];

  while (stack.length > 0) {
    const group = stack.pop();

    tree.push(
      <li key={group.prefix} className="flex items-center space-x-2">
        <span className="font-bold">{group.prefix}</span>
        {group.routes.length > 0 && (
          <ul className="pl-4">
            {group.routes.map((route) => (
              <li key={route.path}>{route.path}</li>
            ))}
          </ul>
        )}
      </li>
    );

    stack.push(...group.subgroups);
  }

  return <ul className="space-y-2">{tree}</ul>;
};

const groupRoutesByPrefix = (routes) => {
  const groups = {};

  routes.forEach((route) => {
    const prefix = route.path.split("/")[1] || "/";
    if (!groups[prefix]) {
      groups[prefix] = {
        prefix,
        routes: [],
        subgroups: [],
      };
    }

    const nextPrefix = route.path.replace(`/${prefix}`, "") || "/";
    if (nextPrefix === "/") {
      groups[prefix].routes.push(route);
    } else {
      const subgroup = groups[prefix].subgroups.find(
        (group) => group.prefix === nextPrefix
      );
      if (subgroup) {
        subgroup.routes.push(route);
      } else {
        groups[prefix].subgroups.push({
          prefix: nextPrefix,
          routes: [route],
        });
      }
    }
  });

  return Object.values(groups);
};

const paths = routes.map((route) => ({
  path: route.path,
  layout: route.layout || "default",
}));

function RouteFrontend() {
  return <RouteTree routes={paths} />;
}

export default RouteFrontend
