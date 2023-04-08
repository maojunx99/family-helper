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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem(
    $filter: ModelSubscriptionListItemFilterInput
    $owner: String
  ) {
    onCreateListItem(filter: $filter, owner: $owner) {
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
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem(
    $filter: ModelSubscriptionListItemFilterInput
    $owner: String
  ) {
    onUpdateListItem(filter: $filter, owner: $owner) {
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
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem(
    $filter: ModelSubscriptionListItemFilterInput
    $owner: String
  ) {
    onDeleteListItem(filter: $filter, owner: $owner) {
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
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction(
    $filter: ModelSubscriptionActionFilterInput
    $owner: String
  ) {
    onCreateAction(filter: $filter, owner: $owner) {
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
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction(
    $filter: ModelSubscriptionActionFilterInput
    $owner: String
  ) {
    onUpdateAction(filter: $filter, owner: $owner) {
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
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction(
    $filter: ModelSubscriptionActionFilterInput
    $owner: String
  ) {
    onDeleteAction(filter: $filter, owner: $owner) {
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
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
