import Comment from "../model/comment.js"

export const newComment = async (request, response) => {
    try {
        const comment = request.body;

        const newComment = new Comment(comment);
        await newComment.save();
        return response.status(200).json({ msg: 'Comment saves successfully' })
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({postId: request.params.id});

        return response.status(200).json(comments);
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

export const deleteComment = async (request, response) => {
    try {
        await Comment.findByIdAndDelete(request.params.id);

        return response.status(200).json({ msg: 'comment deleted successfully' })
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}