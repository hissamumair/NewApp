import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');

  const handlePost = () => {
    if (comment.trim()) {
      const newPost = {
        id: posts.length + 1,
        text: comment,
        likes: 0,
        comments: [],
      };
      setPosts([...posts, newPost]);
      setComment('');
    }
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleComment = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
    setPosts(updatedPosts);
    setComment('');
  };

  const renderPost = ({ item: post }) => (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <Icon name="user" size={24} color="black" />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <Text style={styles.postText}>{post.text}</Text>
      <TouchableOpacity onPress={() => handleLike(post.id)}>
        <Text style={styles.actionText}>Like ({post.likes})</Text>
      </TouchableOpacity>
      <TextInput
        value={comment}
        onChangeText={setComment}
        placeholder="Write a comment..."
        style={styles.commentInput}
      />
      <TouchableOpacity onPress={() => handleComment(post.id)} style={styles.commentButton}>
        <Text style={styles.commentButtonText}>Post Comment</Text>
      </TouchableOpacity>
      <FlatList
        data={post.comments}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={comment}
        onChangeText={setComment}
        placeholder="Write a new post..."
        style={styles.input}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity onPress={handlePost} style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  postContainer: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userName: {
    marginLeft: 5,
    fontSize: 16,
  },
  postText: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
    color:"black",
  },
  actionText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 17,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  postButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    height:40,
    width:150,
  },
  postButtonText: {
    color: 'black',
    fontSize: 16,
  },
  commentButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  commentButtonText: {
    color: 'black',
    fontSize: 16,
    
  },
});

export default Post;
