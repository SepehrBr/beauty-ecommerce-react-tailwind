/* eslint-disable react/prop-types */

import MagazineCard from "./MagazineCard"

export default function MagazineRow({ articles }) {

    return (
        <div className="min-h-screen w-full bg-transparent flex items-center justify-center p-5 my-5 space-x-4">
            {
                articles.map(article => <MagazineCard key={article.id} {...article} />)
            }
        </div>
    )
}
