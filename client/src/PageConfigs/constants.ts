import { ComponentType } from "react";
import { match } from 'react-router';
import { Action } from "redux";

export interface ActionCreationConditions {
   isServer?: boolean;
   isMount?: boolean;
   isUpdate?: boolean;
   isHydrated?: boolean;
}

export interface PageLocation {
   search?: string;
   query?: string;
   pathname?: string;
   path?: string;
   hash?: string;
}

export type ActionCreatorFactory = (
   condition: ActionCreationConditions,
   location: PageLocation,
   match: match<PageLocation>,
) => Array<Action | boolean>;

export interface PageConfig {
   url: string;
   Component: ComponentType;
   exact?: boolean;
}
