package com.jdidinya.marketwatch.event;

import com.jdidinya.marketwatch.event.UserEmailVerificationSendEvent;
import com.jdidinya.marketwatch.event.UserPasswordResetSendEvent;
import com.jdidinya.marketwatch.service.MailSenderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class Listener {
    private final MailSenderService mailSenderService;

    @EventListener(com.jdidinya.marketwatch.event.UserEmailVerificationSendEvent.class)
    public void onUserEmailVerificationSendEvent(UserEmailVerificationSendEvent event) {
        log.info("[User e-mail verification mail send event listener] {} - {}",
            event.getUser().getEmail(), event.getUser().getId());
        mailSenderService.sendUserEmailVerification(event.getUser());
    }

    @EventListener(com.jdidinya.marketwatch.event.UserPasswordResetSendEvent.class)
    public void onUserPasswordResetSendEvent(UserPasswordResetSendEvent event) {
        log.info("[User password reset mail send event listener] {} - {}",
            event.getUser().getEmail(), event.getUser().getId());
        mailSenderService.sendUserPasswordReset(event.getUser());
    }
}
