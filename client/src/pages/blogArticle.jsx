import moment from "moment"

function BlogArticle() {
 
  return (
    <div className="App w-full h-max px-20 py-10">
        <article>
            <header className="bg-indigo-600 p-5">
                <span><time>{ `${moment().format('MMMM DD, YYYY')}`}</time></span>
                <h1 className="text-black">Git: the basic commands every developer should know.</h1>
            </header>
            <div className="bg-indigo-600 p-5">By Mohammad Iqbal</div>
            <figure></figure>
            <section className="px- 20 py-8 text-black">
                <p>
                Git is useful for anyone who writes code or tracks changes to files, from web developers to app developers. So, what exactly is it, and why should you start using it?
                What is Git?
                Git is a version control system that tracks file changes. Using Git allows you to keep a record of all changes and return to specific versions as needed. It is simple to use, takes up little space, and is extremely productive. Its branching model distinguishes it from nearly every other SCM available. The ability to merge changes from multiple people into a single source is what makes Git so simple. You can use GitHub or other online hosts to store backups of your files as well as their revision history.
                Git’s main components
                To me, Git is a wonderful tool to use in team projects because it helps to avoid confusion in code and brings a simple yet effective system to work. Here, I’d like to cover up the main components of Git:


                Repository
                A Git repository (or simply repo) contains all of the project files as well as the entire revision history. You'll take an ordinary folder of files (such as the root folder of a website) and tell Git to turn it into a repository. This creates a .git subfolder in which all of the Git metadata for tracking changes is stored. Simply put, a repository is a place where you keep your code.
                Commit 
                To add new code to the repository, you need to make acommit, which is a snapshot of your repository at a particular point in time. commits a specific change, or series of changes, to a file in the repository. Git's history is made up of successive commits.
                Branch 
                A branch is used to store your changes until they are ready. While the main branch (master) remains stable, you can work on a branch. When you're finished, you can merge it with the master. The great advantage is that you can have a few branches in one repository and merge them whenever you need.
                Pull requests 
                This is a technique used in Git for discussing changes before they are merged into your codebase. A pull request is more than just a notification; it's a dedicated discussion forum for the proposed feature. This is especially convenient when several people are working on the same code, allowing developers to check each other's work.
                Now that we have briefly discussed the main theoretical Git components, I want to list 10 basic Git commands that every developer must know before starting to work with Git.
                In Git, branches are utilized to hold modifications until they are ready for integration. You can work on a branch while the main branch, commonly known as the "master" branch, remains stable. Once you've completed your work on a branch, you can merge it with the master. This provides the flexibility of having several branches in a single repository and merging them as necessary.

                Additionally, pull requests are a Git technique utilized to discuss modifications before they are merged into the codebase. Unlike simple notifications, pull requests provide a dedicated forum for discussing the proposed feature. This is particularly useful when multiple developers are working on the same code, allowing them to review and comment on each other's work.
                </p>
            </section>
            <section>
              <h2> Comments</h2>
            </section>
        </article>
    </div>
  )
}

export default BlogArticle
