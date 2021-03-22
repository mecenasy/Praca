import React, { Dispatch } from 'react';
import { connect, shallowEqual } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ActionCreatorFactory } from '../../PageConfigs/constants';
import { hydrateInfo } from '../Hydrate/hydrate';
import { ActionContext } from '../../Providers/ActionProvider/ActionProvider';

interface ActionsWrapperProps extends RouteComponentProps<any> {
   actionCreatorFactory: ActionCreatorFactory;
   children: JSX.Element;
   dispatch: Dispatch<any>;
}


class ActionsWrapper extends React.Component<ActionsWrapperProps> {
   constructor(props: ActionsWrapperProps, context: any) {
      super(props, context);
      if (SERVER_BUILD) {
         const actions = this.props.actionCreatorFactory?.(
            { isServer: true },
            this.props.location,
            this.props.match,
         ).filter((a) => a);

         if (actions?.length) {
            this.context.setActions?.(actions);
         }
      }
   }
   componentDidMount() {
      this.dispatchAction('mount', true);

   }

   shouldComponentUpdate(nextProps: ActionsWrapperProps) {
      return (!shallowEqual(this.props.location.search, nextProps.location.search)
         || !shallowEqual(this.props.match.params, nextProps.match.params)
         || this.props.match.url !== nextProps.match.url
      )
   }

   componentDidUpdate() {
      this.dispatchAction('update', true, true);
   }

   dispatchAction(condition: 'mount' | 'server' | 'update', isMount?: boolean, isUpdate?: boolean) {
      const actions = this.props.actionCreatorFactory?.(
         { isServer: SERVER_BUILD, isMount, isHydrated: hydrateInfo.getHydrated(), isUpdate },
         this.props.location,
         this.props.match,
      )

      if (actions?.length) {
         actions.forEach((action) => {
            if (typeof action === 'object') {
               if (DEV) {
                  console.log(condition, action.type);
               }
               this.props.dispatch(action);
            }
         });
      }
   }

   static contextType = ActionContext;
   render() {
      return (
         <>
            {this.props.children}
         </>
      )
   }
}


export default connect(undefined, (dispatch) => ({ dispatch }))(withRouter(ActionsWrapper));
