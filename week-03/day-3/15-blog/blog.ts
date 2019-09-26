// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

import { BlogPost, loremIpsum, waitButWhy, superb } from './../03-blogPost/blogPost';

class Blog {
    private _listOfPosts: BlogPost [];

    public constructor (listOfPosts?: BlogPost []) {
        if(listOfPosts){
            this._listOfPosts = listOfPosts;
        } else {
            this._listOfPosts = [];
        }
    }

    public addBlogPost (blogPost: BlogPost): void {
        this._listOfPosts.push(blogPost);
    }
    
    public delete (postNumber: number): void {
        if (postNumber >= 0 && postNumber <= this._listOfPosts.length) {
            this._listOfPosts.splice(postNumber, 1);
            console.log(`Post number ${postNumber} has been removed.`)
        }
    }

    public update (postNumber: number, blogPost: BlogPost) {
        if (postNumber >= 0 && postNumber <= this._listOfPosts.length) {
            this._listOfPosts.splice(postNumber, 1, blogPost);
            console.log(`Post number ${postNumber} has been updated.`)
        }
    }
}

// Making a blog and using the functions to verify their effectiveness
let danielsBlog = new Blog;

danielsBlog.addBlogPost(loremIpsum);
danielsBlog.addBlogPost(waitButWhy);
danielsBlog.addBlogPost(superb);

danielsBlog.delete(1);
danielsBlog.update(1, loremIpsum);

console.log(danielsBlog);