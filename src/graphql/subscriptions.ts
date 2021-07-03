/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      type
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      type
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      type
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateMediaFile = /* GraphQL */ `
  subscription OnCreateMediaFile {
    onCreateMediaFile {
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
export const onUpdateMediaFile = /* GraphQL */ `
  subscription OnUpdateMediaFile {
    onUpdateMediaFile {
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
export const onDeleteMediaFile = /* GraphQL */ `
  subscription OnDeleteMediaFile {
    onDeleteMediaFile {
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
export const onCreateCarouselData = /* GraphQL */ `
  subscription OnCreateCarouselData {
    onCreateCarouselData {
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
export const onUpdateCarouselData = /* GraphQL */ `
  subscription OnUpdateCarouselData {
    onUpdateCarouselData {
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
export const onDeleteCarouselData = /* GraphQL */ `
  subscription OnDeleteCarouselData {
    onDeleteCarouselData {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
