/* Post model: the single source of truth for what a post looks like.
   Why it exists:
   - post-create and post-list (and later a service) all need the same shape, so it lives
     in the shared posts/ folder instead of inside one component.
   - It replaces untyped data (and $any in templates), so the compiler catches typos
     like post.titel (deliberately misspelled example) instead of failing silently at runtime.
   Why an interface and not a class:
   - A post is plain data with no behaviour. An interface is erased at compile time
     (no runtime code) and matches plain JSON objects from the backend.
   - If methods are needed later, switch to a class (and map JSON into instances).
   If the API shape differs from the UI shape (e.g. Mongo's _id), add a separate DTO
   interface and map it to this one in the service. */
// interface can't be instantiate, and only a contract
export interface Post { 
  title: string;
  content: string; // we need to have clear definition on how a post is
}
