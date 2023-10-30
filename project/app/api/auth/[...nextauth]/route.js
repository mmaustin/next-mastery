import User from '@models/user';
import { connectToDB } from '@utils/database';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  async session({ session }) {

  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      const userExists = await User.findOne({
        email: profile.email
      });

      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture
        })
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
})
//console.log(handler);
export { handler as GET, handler as POST };