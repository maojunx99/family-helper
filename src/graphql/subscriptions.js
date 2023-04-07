/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
    onCreateList(filter: $filter) {
      id
      title
      description
      listItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
    onUpdateList(filter: $filter) {
      id
      title
      description
      listItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
    onDeleteList(filter: $filter) {
      id
      title
      description
      listItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem($filter: ModelSubscriptionListItemFilterInput) {
    onCreateListItem(filter: $filter) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        listItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem($filter: ModelSubscriptionListItemFilterInput) {
    onUpdateListItem(filter: $filter) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        listItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem($filter: ModelSubscriptionListItemFilterInput) {
    onDeleteListItem(filter: $filter) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        listItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction($filter: ModelSubscriptionActionFilterInput) {
    onCreateAction(filter: $filter) {
      id
      action
      listItem {
        id
        title
        quantity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction($filter: ModelSubscriptionActionFilterInput) {
    onUpdateAction(filter: $filter) {
      id
      action
      listItem {
        id
        title
        quantity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction($filter: ModelSubscriptionActionFilterInput) {
    onDeleteAction(filter: $filter) {
      id
      action
      listItem {
        id
        title
        quantity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
