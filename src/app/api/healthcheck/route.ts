// import dbConnect from "@/lib/dbConnect";

export async function GET(request: Request){
    try {
        // await dbConnect()

        return Response.json({
            success: true,
            messsage: "All good man"
        },
        {status: 201}
)
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Something went wrong",
                data: error
            },
            {status: 500}
        )
    }
    
}