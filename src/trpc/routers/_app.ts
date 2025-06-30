import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.number(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  invoke: baseProcedure.input(z.object({ msg: z.string() }))
    .mutation(async ({ input }) => {
      const data = await inngest.send({
        name: 'test/hello.world',
        data: {
          email: input.msg
        }
      })
      return { ok: 'success', msg: data.ids}
    })
});
// export type definition of API
export type AppRouter = typeof appRouter;