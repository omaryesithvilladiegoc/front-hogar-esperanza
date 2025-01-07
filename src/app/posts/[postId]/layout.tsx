import React from "react";
import { Metadata } from "next";
import { getPostByIdFetch, URL_FETCH } from "@/src/fetch/user-fetch";

// ✅ Metadata dinámica para SEO
export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const postId = params.postId;

  try {
    // Llama a tu API para obtener los datos del post
    const response = await fetch(`${URL_FETCH}/post/${postId}`, {
        method: "GET", // Método GET para obtener los posts
        headers: {
          "Content-Type": "application/json", // Indicamos que es JSON
        },
      });
  
      const post =  await response.json()
    

    return {
      title: post.title || "Hogar Esperanza",
      description: post.mainContent || "Description is missing!",
      keywords: post.keywords?.join(", ") || "blog, hogar esperanza",
      openGraph: {
        title: post.title,
        description: post.subtitle,
        url: `https://www.fundacionhogaresperanza.com/posts/${postId}`,
        images: post.image ? [{ url: post.image, width: 800, height: 600 }] : [],
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return {
      title: "Post Not Found",
      description: "This post does not exist or could not be loaded.",
    };
  }
}

// ✅ Layout específico para la ruta de posts
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{  }}>
      {children}
    </main>
  );
}
