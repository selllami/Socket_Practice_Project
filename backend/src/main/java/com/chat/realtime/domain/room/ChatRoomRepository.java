package com.chat.realtime.domain.room;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRoomRepository extends JpaRepository<ChatRoom , Long> {
}
