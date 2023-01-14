import MemberService from "@/services/server/member.service";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MembersComponent",
  data() {
    return {
      members: null,
    };
  },
  mounted() {
    this.getMembers();
  },
  methods: {
    async getMembers() {
      this.members = await MemberService.get();
    },
  },
});
