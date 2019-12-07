export function getMembersAvatars(members: any): any[] {
  return members.map(item => {
    return {
      imageUrl: item.avatarUrl ? item.avatarUrl.concat('/50.png') : null,
      initials: item.initials
    };
  });
}
