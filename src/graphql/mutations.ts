/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createMediaFile = /* GraphQL */ `
  mutation CreateMediaFile(
    $input: CreateMediaFileInput!
    $condition: ModelMediaFileConditionInput
  ) {
    createMediaFile(input: $input, condition: $condition) {
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
export const updateMediaFile = /* GraphQL */ `
  mutation UpdateMediaFile(
    $input: UpdateMediaFileInput!
    $condition: ModelMediaFileConditionInput
  ) {
    updateMediaFile(input: $input, condition: $condition) {
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
export const deleteMediaFile = /* GraphQL */ `
  mutation DeleteMediaFile(
    $input: DeleteMediaFileInput!
    $condition: ModelMediaFileConditionInput
  ) {
    deleteMediaFile(input: $input, condition: $condition) {
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
export const createCarouselData = /* GraphQL */ `
  mutation CreateCarouselData(
    $input: CreateCarouselDataInput!
    $condition: ModelCarouselDataConditionInput
  ) {
    createCarouselData(input: $input, condition: $condition) {
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
export const updateCarouselData = /* GraphQL */ `
  mutation UpdateCarouselData(
    $input: UpdateCarouselDataInput!
    $condition: ModelCarouselDataConditionInput
  ) {
    updateCarouselData(input: $input, condition: $condition) {
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
export const deleteCarouselData = /* GraphQL */ `
  mutation DeleteCarouselData(
    $input: DeleteCarouselDataInput!
    $condition: ModelCarouselDataConditionInput
  ) {
    deleteCarouselData(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
