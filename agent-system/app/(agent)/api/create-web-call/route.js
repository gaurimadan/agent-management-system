import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming request body
    const { agent_id, metadata, retell_llm_dynamic_variables } = body;
    const payload = { agent_id };

    if (metadata) {
      payload.metadata = metadata;
    }

    if (retell_llm_dynamic_variables) {
      payload.retell_llm_dynamic_variables = retell_llm_dynamic_variables;
    }

    // Send the request to Retell API
    const response = await axios.post(
      'https://api.retellai.com/v2/create-web-call',
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 201 });
  } catch (error) {
    console.error('Error creating web call:', error.response?.data || error.message);

    return new Response(
      JSON.stringify({
        error: 'Failed to create web call',
        details: error.response?.data || error.message,
      }),
      { status: 500 }
    );
  }
}
