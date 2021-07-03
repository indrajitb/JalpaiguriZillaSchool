/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: ID!) {
    getUser(email: $email) {
      id
      type
      name
      email
      userOwnerId
      userOwnerName
      accountConfirmed
      createdAt
      profileCreated
      owner
      updatedAt
      profile {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      mediaFiles {
        items {
          id
          type
          userId
          userEmail
          file {
            bucket
            region
            key
          }
          createdAt
          owner
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        nextToken
      }
      posts {
        items {
          type
          id
          userId
          userEmail
          createdAt
          updatedAt
          title
          content
          files {
            bucket
            region
            key
          }
          likes
          unlikes
          likeCount
          unlikeCount
          owner
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          type
          id
          postId
          userId
          userEmail
          content
          createdAt
          updatedAt
          likes
          unlikes
          likeCount
          unlikeCount
          owner
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          post {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        type
        name
        email
        userOwnerId
        userOwnerName
        accountConfirmed
        createdAt
        profileCreated
        owner
        updatedAt
        profile {
          id
          type
          userId
          classRoom
          userEmail
          classRoomYear
          schoolLeavingYear
          year
          role
          roleInteger
          profileOwnerId
          profileOwnerName
          owner
          createdAt
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        mediaFiles {
          items {
            id
            type
            userId
            userEmail
            file {
              bucket
              region
              key
            }
            createdAt
            owner
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
        posts {
          items {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserById = /* GraphQL */ `
  query GetUserById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        email
        userOwnerId
        userOwnerName
        accountConfirmed
        createdAt
        profileCreated
        owner
        updatedAt
        profile {
          id
          type
          userId
          classRoom
          userEmail
          classRoomYear
          schoolLeavingYear
          year
          role
          roleInteger
          profileOwnerId
          profileOwnerName
          owner
          createdAt
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        mediaFiles {
          items {
            id
            type
            userId
            userEmail
            file {
              bucket
              region
              key
            }
            createdAt
            owner
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
        posts {
          items {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($userEmail: ID!) {
    getProfile(userEmail: $userEmail) {
      id
      type
      userId
      classRoom
      userEmail
      classRoomYear
      schoolLeavingYear
      year
      role
      roleInteger
      profileOwnerId
      profileOwnerName
      owner
      createdAt
      updatedAt
      user {
        id
        type
        name
        email
        userOwnerId
        userOwnerName
        accountConfirmed
        createdAt
        profileCreated
        owner
        updatedAt
        profile {
          id
          type
          userId
          classRoom
          userEmail
          classRoomYear
          schoolLeavingYear
          year
          role
          roleInteger
          profileOwnerId
          profileOwnerName
          owner
          createdAt
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        mediaFiles {
          items {
            id
            type
            userId
            userEmail
            file {
              bucket
              region
              key
            }
            createdAt
            owner
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
        posts {
          items {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $userEmail: ID
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      userEmail: $userEmail
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getProfileByUserId = /* GraphQL */ `
  query GetProfileByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getProfileByRole = /* GraphQL */ `
  query GetProfileByRole(
    $roleInteger: Int
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileByRole(
      roleInteger: $roleInteger
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getProfileBySchoolLeavingYear = /* GraphQL */ `
  query GetProfileBySchoolLeavingYear(
    $schoolLeavingYear: String
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileBySchoolLeavingYear(
      schoolLeavingYear: $schoolLeavingYear
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getProfileByClassRoomYear = /* GraphQL */ `
  query GetProfileByClassRoomYear(
    $classRoomYear: String
    $classRoom: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileByClassRoomYear(
      classRoomYear: $classRoomYear
      classRoom: $classRoom
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getProfileByClassRoom = /* GraphQL */ `
  query GetProfileByClassRoom(
    $classRoom: String
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileByClassRoom(
      classRoom: $classRoom
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userId
        classRoom
        userEmail
        classRoomYear
        schoolLeavingYear
        year
        role
        roleInteger
        profileOwnerId
        profileOwnerName
        owner
        createdAt
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getMediaFile = /* GraphQL */ `
  query GetMediaFile($id: ID!) {
    getMediaFile(id: $id) {
      id
      type
      userId
      userEmail
      file {
        bucket
        region
        key
      }
      createdAt
      owner
      updatedAt
      user {
        id
        type
        name
        email
        userOwnerId
        userOwnerName
        accountConfirmed
        createdAt
        profileCreated
        owner
        updatedAt
        profile {
          id
          type
          userId
          classRoom
          userEmail
          classRoomYear
          schoolLeavingYear
          year
          role
          roleInteger
          profileOwnerId
          profileOwnerName
          owner
          createdAt
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        mediaFiles {
          items {
            id
            type
            userId
            userEmail
            file {
              bucket
              region
              key
            }
            createdAt
            owner
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
        posts {
          items {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listMediaFiles = /* GraphQL */ `
  query ListMediaFiles(
    $filter: ModelMediaFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMediaFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        userId
        userEmail
        file {
          bucket
          region
          key
        }
        createdAt
        owner
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getMediaByTime = /* GraphQL */ `
  query GetMediaByTime(
    $type: TableName
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMediaFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMediaByTime(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userId
        userEmail
        file {
          bucket
          region
          key
        }
        createdAt
        owner
        updatedAt
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getCarouselData = /* GraphQL */ `
  query GetCarouselData($id: ID!) {
    getCarouselData(id: $id) {
      id
      file {
        bucket
        region
        key
      }
      createdAt
      owner
      updatedAt
    }
  }
`;
export const listCarouselDatas = /* GraphQL */ `
  query ListCarouselDatas(
    $filter: ModelCarouselDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarouselDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        file {
          bucket
          region
          key
        }
        createdAt
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      type
      id
      userId
      userEmail
      createdAt
      updatedAt
      title
      content
      files {
        bucket
        region
        key
      }
      likes
      unlikes
      likeCount
      unlikeCount
      owner
      user {
        id
        type
        name
        email
        userOwnerId
        userOwnerName
        accountConfirmed
        createdAt
        profileCreated
        owner
        updatedAt
        profile {
          id
          type
          userId
          classRoom
          userEmail
          classRoomYear
          schoolLeavingYear
          year
          role
          roleInteger
          profileOwnerId
          profileOwnerName
          owner
          createdAt
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        mediaFiles {
          items {
            id
            type
            userId
            userEmail
            file {
              bucket
              region
              key
            }
            createdAt
            owner
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
        posts {
          items {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      comments {
        items {
          type
          id
          postId
          userId
          userEmail
          content
          createdAt
          updatedAt
          likes
          unlikes
          likeCount
          unlikeCount
          owner
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          post {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        type
        id
        userId
        userEmail
        createdAt
        updatedAt
        title
        content
        files {
          bucket
          region
          key
        }
        likes
        unlikes
        likeCount
        unlikeCount
        owner
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAllPosts = /* GraphQL */ `
  query GetAllPosts(
    $type: TableName
    $updatedAtCreatedAt: ModelPostSortedByTimeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAllPosts(
      type: $type
      updatedAtCreatedAt: $updatedAtCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        userId
        userEmail
        createdAt
        updatedAt
        title
        content
        files {
          bucket
          region
          key
        }
        likes
        unlikes
        likeCount
        unlikeCount
        owner
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      type
      id
      postId
      userId
      userEmail
      content
      createdAt
      updatedAt
      likes
      unlikes
      likeCount
      unlikeCount
      owner
      user {
        id
        type
        name
        email
        userOwnerId
        userOwnerName
        accountConfirmed
        createdAt
        profileCreated
        owner
        updatedAt
        profile {
          id
          type
          userId
          classRoom
          userEmail
          classRoomYear
          schoolLeavingYear
          year
          role
          roleInteger
          profileOwnerId
          profileOwnerName
          owner
          createdAt
          updatedAt
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
        }
        mediaFiles {
          items {
            id
            type
            userId
            userEmail
            file {
              bucket
              region
              key
            }
            createdAt
            owner
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
        posts {
          items {
            type
            id
            userId
            userEmail
            createdAt
            updatedAt
            title
            content
            files {
              bucket
              region
              key
            }
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          nextToken
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      post {
        type
        id
        userId
        userEmail
        createdAt
        updatedAt
        title
        content
        files {
          bucket
          region
          key
        }
        likes
        unlikes
        likeCount
        unlikeCount
        owner
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        comments {
          items {
            type
            id
            postId
            userId
            userEmail
            content
            createdAt
            updatedAt
            likes
            unlikes
            likeCount
            unlikeCount
            owner
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
            post {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        type
        id
        postId
        userId
        userEmail
        content
        createdAt
        updatedAt
        likes
        unlikes
        likeCount
        unlikeCount
        owner
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        post {
          type
          id
          userId
          userEmail
          createdAt
          updatedAt
          title
          content
          files {
            bucket
            region
            key
          }
          likes
          unlikes
          likeCount
          unlikeCount
          owner
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getAllComments = /* GraphQL */ `
  query GetAllComments(
    $type: TableName
    $updatedAtCreatedAt: ModelCommentByTimeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAllComments(
      type: $type
      updatedAtCreatedAt: $updatedAtCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        postId
        userId
        userEmail
        content
        createdAt
        updatedAt
        likes
        unlikes
        likeCount
        unlikeCount
        owner
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        post {
          type
          id
          userId
          userEmail
          createdAt
          updatedAt
          title
          content
          files {
            bucket
            region
            key
          }
          likes
          unlikes
          likeCount
          unlikeCount
          owner
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getCommentsByPostId = /* GraphQL */ `
  query GetCommentsByPostId(
    $postId: ID
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByPostId(
      postId: $postId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        postId
        userId
        userEmail
        content
        createdAt
        updatedAt
        likes
        unlikes
        likeCount
        unlikeCount
        owner
        user {
          id
          type
          name
          email
          userOwnerId
          userOwnerName
          accountConfirmed
          createdAt
          profileCreated
          owner
          updatedAt
          profile {
            id
            type
            userId
            classRoom
            userEmail
            classRoomYear
            schoolLeavingYear
            year
            role
            roleInteger
            profileOwnerId
            profileOwnerName
            owner
            createdAt
            updatedAt
            user {
              id
              type
              name
              email
              userOwnerId
              userOwnerName
              accountConfirmed
              createdAt
              profileCreated
              owner
              updatedAt
              profile {
                id
                type
                userId
                classRoom
                userEmail
                classRoomYear
                schoolLeavingYear
                year
                role
                roleInteger
                profileOwnerId
                profileOwnerName
                owner
                createdAt
                updatedAt
              }
              mediaFiles {
                nextToken
              }
              posts {
                nextToken
              }
              comments {
                nextToken
              }
            }
          }
          mediaFiles {
            items {
              id
              type
              userId
              userEmail
              file {
                bucket
                region
                key
              }
              createdAt
              owner
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            nextToken
          }
          posts {
            items {
              type
              id
              userId
              userEmail
              createdAt
              updatedAt
              title
              content
              files {
                bucket
                region
                key
              }
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              comments {
                nextToken
              }
            }
            nextToken
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
        post {
          type
          id
          userId
          userEmail
          createdAt
          updatedAt
          title
          content
          files {
            bucket
            region
            key
          }
          likes
          unlikes
          likeCount
          unlikeCount
          owner
          user {
            id
            type
            name
            email
            userOwnerId
            userOwnerName
            accountConfirmed
            createdAt
            profileCreated
            owner
            updatedAt
            profile {
              id
              type
              userId
              classRoom
              userEmail
              classRoomYear
              schoolLeavingYear
              year
              role
              roleInteger
              profileOwnerId
              profileOwnerName
              owner
              createdAt
              updatedAt
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
            }
            mediaFiles {
              items {
                id
                type
                userId
                userEmail
                createdAt
                owner
                updatedAt
              }
              nextToken
            }
            posts {
              items {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
            comments {
              items {
                type
                id
                postId
                userId
                userEmail
                content
                createdAt
                updatedAt
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
              nextToken
            }
          }
          comments {
            items {
              type
              id
              postId
              userId
              userEmail
              content
              createdAt
              updatedAt
              likes
              unlikes
              likeCount
              unlikeCount
              owner
              user {
                id
                type
                name
                email
                userOwnerId
                userOwnerName
                accountConfirmed
                createdAt
                profileCreated
                owner
                updatedAt
              }
              post {
                type
                id
                userId
                userEmail
                createdAt
                updatedAt
                title
                content
                likes
                unlikes
                likeCount
                unlikeCount
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
