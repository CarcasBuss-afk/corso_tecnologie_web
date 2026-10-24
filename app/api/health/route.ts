/* Un battito: serve ai test e a controllare il deploy. Non tocca Firebase. */
export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ ok: true, servizio: 'corso-tecnologie-web', ora: new Date().toISOString() });
}
